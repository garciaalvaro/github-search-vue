<template>
	<div
		v-if="repositories_ids.length"
		id="container-results"
		class="container container--content-column"
	>
		<Message tag="H3" :text="message_text" />

		<Repository v-for="id in repositories_ids" :id="id" :key="id" />

		<Pagination />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

import { repositories_ids, repositories_found } from "../../store/state";
import Repository from "../Repository/Repository.vue";
import Message from "../Message/Message.vue";
import Pagination from "../Pagination/Pagination.vue";

export default defineComponent({
	components: {
		Repository,
		Message,
		Pagination
	},

	setup() {
		const message_text = computed(
			() =>
				`${repositories_found.value.toLocaleString()} repositor${
					repositories_found.value > 1 ? "ies" : "y"
				} found`
		);

		return { repositories_ids, message_text };
	}
});
</script>

<style>
@import "./Results.styl";
</style>
