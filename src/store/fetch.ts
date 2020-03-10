import { watch } from "@vue/composition-api";

import { prepareRepository } from "./utils/prepareRepository";
import {
	fetch_id,
	url,
	status,
	repositories,
	repositories_ids,
	repositories_found
} from "./state";

watch(url, () => {
	repositories_ids.value = [];
	repositories_found.value = 0;
});

let fetch_timeout: null | NodeJS.Timeout = null;

watch(url, (url, url_prev) => {
	if (fetch_timeout) {
		clearTimeout(fetch_timeout);
	}

	if (!url) {
		fetch_timeout = null;
		fetch_id.value = 0;

		return;
	}

	fetch_id.value++;

	const fetch_id_local = fetch_id.value;

	const time =
		url.replace(/&page=\d+/g, "") === url_prev.replace(/&page=\d+/g, "")
			? 0
			: 1000;

	status.value = "waiting";

	fetch_timeout = setTimeout(async () => {
		status.value = "loading";

		fetch_timeout = null;

		// Fetch the data
		const response = await fetch(url).catch(() => {
			status.value = "error";
		});

		// If the id is not the latest one, return. This could happen
		// if a new timeout was triggered before this fetch resolved.
		if (fetch_id.value !== fetch_id_local) return;

		if (!response || !response.ok) {
			const too_many_requests = !!(response && response.status === 403);

			status.value = too_many_requests ? "too_many_requests" : "error";

			return;
		}

		const {
			items: repositories_raw,
			total_count
		}: FetchedData = await response.json();

		const { obj, ids } = repositories_raw.reduce<{
			obj: Record<Repository["id"], Repository>;
			ids: Repository["id"][];
		}>(
			({ obj, ids }, repository) => ({
				obj: {
					...obj,
					[repository.id]: prepareRepository(repository)
				},
				ids: [...ids, repository.id]
			}),
			{ obj: {}, ids: [] }
		);

		status.value = ids.length ? null : "no_results";

		repositories.value = obj;

		repositories_ids.value = ids;

		repositories_found.value = total_count;
	}, time);
});
