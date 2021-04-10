import { computed, defineComponent } from "vue";

import { store } from "@/store";
import styles from "./Pagination.styl";

export default defineComponent({
	name: "Pagination",

	setup() {
		const page = computed(() => store.state.page);

		const repositories_found = computed(
			() => store.state.repositories_found
		);

		const updatePage = (value: number) => {
			store.state.page = value;
		};

		return {
			page,
			repositories_found,
			results_per_page: 30,
			updatePage,
			styles,
		};
	},
});
