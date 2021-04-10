import { computed, defineComponent } from "vue";

import { store } from "@/store";
import { Message } from "../Message";
import { Repository } from "../Repository";
import { Pagination } from "../Pagination";
import styles from "./Results.styl";

export default defineComponent({
	name: "Results",

	components: { Message, Repository, Pagination },

	setup() {
		const repositories_ids = computed(() => store.state.repositories_ids);

		const title = computed(() => {
			const { repositories_found } = store.state;

			const title = `${repositories_found.toLocaleString()} repositor${
				repositories_found > 1 ? "ies" : "y"
			} found`;

			return title;
		});

		return { repositories_ids, title, styles };
	},
});
