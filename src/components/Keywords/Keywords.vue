<template>
	<div :class="[styles.container, styles['theme-dark']]">
		<div :class="styles.content">
			<label :for="styles.input" :class="styles.label">Search</label>

			<input
				:id="styles.input"
				:class="styles.input"
				:value="keywords"
				type="text"
				placeholder="Search repositories..."
				@input="e => updateKeywords(e.target.value)"
			/>

			<button :class="styles.button" @click="fetchRepositories">
				<IconSearch />
			</button>
		</div>
	</div>
</template>

<script src="./Keywords.ts" lang="ts"></script>
