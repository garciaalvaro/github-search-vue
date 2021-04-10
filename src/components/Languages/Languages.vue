<template>
	<div :class="styles.container">
		<Language
			v-for="language in languages"
			:key="language"
			:language="language"
		/>
	</div>
</template>

<script src="./Languages.ts" lang="ts"></script>
