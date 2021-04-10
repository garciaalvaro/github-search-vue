import { state } from "@/store/state";
import { getUrl, prepareRepository } from "@/utils";

interface FetchedData {
	items: RepositoryRaw[];
	total_count: number;
	incomplete_results: boolean;
}

export const fetchRepositories = async (): Promise<void> => {
	const {
		fetch_id: prev_fetch_id,
		keywords,
		language,
		last_update,
		min_stars,
		page,
	} = state;

	state.status = "LOADING";

	const fetch_id = prev_fetch_id + 1;

	state.fetch_id = fetch_id;

	const url = getUrl({
		keywords,
		language,
		last_update,
		min_stars,
		page,
	});

	// Fetch the data
	const response = await fetch(url).catch(() => {
		state.status = "ERROR";
	});

	// If the id is not the latest one, return. This could happen
	// if another fetch was triggered before this one resolved.
	if (state.fetch_id !== fetch_id || state.status !== "LOADING") return;

	if (!response || !response.ok) {
		state.status =
			!response || response.status !== 403
				? "ERROR"
				: "TOO_MANY_REQUESTS";

		return;
	}

	const {
		items: repositories_raw,
		total_count: repositories_found,
	}: FetchedData = await response.json();

	const { obj, ids } = repositories_raw.reduce<{
		obj: State["repositories"];
		ids: State["repositories_ids"];
	}>(
		({ obj, ids }, repository) => ({
			obj: {
				...obj,
				[repository.id]: prepareRepository(repository),
			},
			ids: [...ids, repository.id],
		}),
		{ obj: {}, ids: [] }
	);

	if (ids.length) {
		state.status = null;
		state.repositories = obj;
		state.repositories_ids = ids;
		state.repositories_found = repositories_found;
	} else {
		state.status = "NO_RESULTS";
	}
};
