import { computed, defineComponent, toRefs, PropType } from "vue";

import { store } from "@/store";
import styles from "./Language.styl";

export default defineComponent({
	name: "Language",

	props: {
		language: {
			type: String as PropType<Language>,
			required: true,
		},
	},

	setup(props) {
		const { language } = toRefs(props);

		const is_active = computed(
			() => store.state.language === language.value
		);

		const updateLanguage = () => {
			store.state.language =
				language.value === store.state.language ? null : language.value;
		};

		return { is_active, updateLanguage, styles };
	},
});
