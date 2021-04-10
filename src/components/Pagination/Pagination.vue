<template>
	<nav v-if="repositories_found > results_per_page" :class="styles.container">
		<span>Page {{ page }}</span>

		<button
			:class="[styles.button, styles.prev]"
			:disabled="page === 1"
			@click="updatePage(page - 1)"
		>
			Prev
		</button>

		<button
			:class="[styles.button, styles.next]"
			:disabled="repositories_found <= page * results_per_page"
			@click="updatePage(page + 1)"
		>
			Next
		</button>
	</nav>
</template>

<script src="./Pagination.ts" lang="ts"></script>
