import { computed, defineComponent, toRefs, PropType } from "vue";

import { store } from "@/store";
import IconStar from "./IconStar.vue";
import styles from "./Repository.styl";

export default defineComponent({
	name: "Repository",

	components: { IconStar },

	props: {
		id: {
			type: Number as PropType<Repository["id"]>,
			required: true,
		},
	},

	setup(props) {
		const { id } = toRefs(props);
		const repository = computed(() => store.state.repositories[id.value]);

		return { repository, styles };
	},
});
