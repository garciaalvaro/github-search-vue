import { computed, defineComponent } from "vue";

import { store } from "@/store";
import styles from "./LastUpdate.styl";

export default defineComponent({
	name: "LastUpdate",

	setup() {
		const last_update = computed(() => store.state.last_update);

		const updateLastUpdate = (value: LastUpdate) => {
			store.state.last_update = value;
		};

		return {
			last_update,
			updateLastUpdate,
			styles,
		};
	},
});
