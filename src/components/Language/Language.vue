<template>
	<button
		:class="[styles.button, ...(is_active ? [styles.is_active] : [])]"
		@click="updateLanguage"
	>
		{{ language }}
	</button>
</template>

<script src="./Language.ts" lang="ts"></script>
