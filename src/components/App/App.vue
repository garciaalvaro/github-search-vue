<template>
	<main :class="styles.container">
		<Heading />

		<Keywords />

		<div :class="styles.filters">
			<LastUpdate />
			<MinStars />
			<Languages />
		</div>

		<Status />

		<Results />
	</main>
</template>

<script src="./App.ts" lang="ts"></script>
