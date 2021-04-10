import { defineComponent } from "vue";

import { Language } from "../Language";
import styles from "./Languages.styl";

export default defineComponent({
	name: "Languages",

	components: { Language },

	setup() {
		return {
			languages: [
				"JavaScript",
				"TypeScript",
				"HTML",
				"CSS",
				"Objective-C",
				"Java",
				"Ruby",
				"Python",
				"PHP",
				"C#",
			],

			styles,
		};
	},
});
