<template>
	<div class="container container--content-fluid">
		<Language
			v-for="language in languages"
			:key="language"
			:language="language"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import Language from "../Language/Language.vue";

export default defineComponent({
	components: { Language },

	setup() {
		const languages: Language[] = [
			"JavaScript",
			"TypeScript",
			"HTML",
			"CSS",
			"Objective-C",
			"Java",
			"Ruby",
			"Python",
			"PHP",
			"C#"
		];

		return { languages };
	}
});
</script>
