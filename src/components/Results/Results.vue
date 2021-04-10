<template>
	<div v-if="repositories_ids.length" :class="styles.container">
		<Message tag="H3" :text="title" />

		<ol :class="styles.list">
			<li v-for="id in repositories_ids" :key="id">
				<Repository :id="id" />
			</li>
		</ol>

		<Pagination />
	</div>
</template>

<script src="./Results.ts" lang="ts"></script>
