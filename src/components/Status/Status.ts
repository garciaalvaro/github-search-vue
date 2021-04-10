import { computed, defineComponent } from "vue";

import { store } from "@/store";
import { getTextFromStatus } from "@/utils";
import { Message } from "../Message";

export default defineComponent({
	name: "Status",

	components: { Message },

	setup() {
		const text = computed(() => getTextFromStatus(store.state.status));

		return { text };
	},
});
