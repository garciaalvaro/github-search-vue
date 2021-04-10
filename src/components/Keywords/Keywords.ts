import { computed, defineComponent } from "vue";

import { store } from "@/store";
import IconSearch from "./IconSearch.vue";
import colors from "../App/_colors.styl";
import styles_component from "./Keywords.styl";

const styles = { ...styles_component, ...colors };

export default defineComponent({
	name: "Keywords",

	components: { IconSearch },

	setup() {
		const keywords = computed(() => store.state.keywords);

		const fetchRepositories = () => {
			if (
				keywords.value.length < 3 ||
				store.state.status === "NO_RESULTS"
			)
				return;

			store.actions.fetchRepositories();
		};

		const updateKeywords = (value: string) => {
			store.state.keywords = value;
		};

		return { keywords, fetchRepositories, updateKeywords, styles };
	},
});
