import { reactive } from "vue";

export const state = reactive<State>({
	fetch_id: 0,
	repositories: {},
	repositories_found: 0,
	repositories_ids: [],
	keywords: "",
	language: null,
	last_update: null,
	min_stars: null,
	page: 1,
	status: null,
});
