<template>
	<div :class="styles.container">
		<label :for="styles.select">Minimum stars</label>

		<select
			:id="styles.select"
			:class="styles.select"
			:value="min_stars || ''"
			@change="e => updateMinStars(e.target.value)"
		>
			<option value="">Any amount</option>

			<option
				v-for="{ value, label } in values"
				:key="label"
				:value="value"
			>
				{{ label }}
			</option>
		</select>
	</div>
</template>

<script src="./MinStars.ts" lang="ts"></script>
