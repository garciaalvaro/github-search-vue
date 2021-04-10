interface State {
	fetch_id: number;
	repositories: Record<Repository["id"], Repository>;
	repositories_found: number;
	repositories_ids: Repository["id"][];
	keywords: string;
	language: null | Language;
	last_update: null | LastUpdate;
	min_stars: null | MinStars;
	page: number;
	status:
		| null
		| "CHARACTERS_0"
		| "CHARACTERS_1"
		| "CHARACTERS_2"
		| "WAITING"
		| "LOADING"
		| "NO_RESULTS"
		| "TOO_MANY_REQUESTS"
		| "ERROR";
}
