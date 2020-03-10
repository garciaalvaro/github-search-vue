<template>
	<nav v-if="results_per_page < repositories_found" id="pagination">
		<span>Page {{ page }}</span>

		<button
			id="prev"
			class="btn btn--text btn--filled"
			:disabled="page === 1"
			@click="loadPrevPage()"
		>
			Prev
		</button>

		<button
			id="next"
			class="btn btn--text btn--filled"
			:disabled="repositories_found <= page * results_per_page"
			@click="loadNextPage()"
		>
			Next
		</button>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { repositories_found, page } from "../../store/state";

export default defineComponent({
	setup() {
		const results_per_page = 30;
		const loadPrevPage = () => page.value--;
		const loadNextPage = () => page.value++;

		return {
			page,
			results_per_page,
			repositories_found,
			loadPrevPage,
			loadNextPage
		};
	}
});
</script>

<style>
@import "./Pagination.styl";
</style>
