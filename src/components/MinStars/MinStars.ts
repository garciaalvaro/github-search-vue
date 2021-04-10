import { computed, defineComponent } from "vue";

import { store } from "@/store";
import styles from "./MinStars.styl";

const values = [10, 100, 1000, 10000, 50000, 100000].map(value => ({
	value,
	label: value.toLocaleString(),
}));

export default defineComponent({
	name: "MinStars",

	setup() {
		const min_stars = computed(() => store.state.min_stars);

		const updateMinStars = (value: MinStars) => {
			store.state.min_stars = value;
		};

		return { min_stars, updateMinStars, values, styles };
	},
});
