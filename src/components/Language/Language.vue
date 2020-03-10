<template>
	<button
		:class="{
			btn: true,
			'btn--underlined': true,
			'btn--is-active': language_active === language
		}"
		@click="updateLanguage()"
	>
		{{ language }}
	</button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { language as language_active } from "../../store/state";

export default defineComponent({
	props: {
		language: { type: String, required: true }
	},

	setup(props) {
		const { language } = props;

		const updateLanguage = () => {
			if (language === language_active.value) {
				language_active.value = "";
			} else {
				language_active.value = language as Language;
			}
		};

		return {
			updateLanguage,
			language_active
		};
	}
});
</script>
