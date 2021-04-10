import { state } from "@/store/state";

export const emptyRepositories = (): void => {
	state.repositories = {};
	state.repositories_ids = [];
	state.repositories_found = 0;
};
