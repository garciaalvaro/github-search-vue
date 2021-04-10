import { defineComponent } from "vue";

import colors from "../App/_colors.styl";
import styles_component from "./Heading.styl";

const styles = { ...styles_component, ...colors };

export default defineComponent({
	name: "Heading",

	setup() {
		return {
			styles,
		};
	},
});
