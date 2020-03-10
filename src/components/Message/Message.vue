<template>
	<h1 v-if="tag === 'H1'">{{ text }}</h1>
	<h2 v-else-if="tag === 'H2'">{{ text }}</h2>
	<h3 v-else-if="tag === 'H3'">{{ text }}</h3>
	<h4 v-else-if="tag === 'H4'">{{ text }}</h4>
	<span v-else-if="tag === 'SPAN'">{{ text }}</span>
	<p v-else>{{ text }}</p>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
	props: {
		tag: String,
		text: String
	}
});
</script>
