import { defineComponent, PropType } from "vue";

import styles from "./Message.styl";

export default defineComponent({
	name: "Message",

	props: {
		tag: {
			type: String as PropType<"P" | "H1" | "H2" | "H3" | "H4" | "SPAN">,
			default: "P",
		},

		text: {
			type: String,
			default: "",
		},
	},

	setup() {
		return {
			styles,
		};
	},
});
