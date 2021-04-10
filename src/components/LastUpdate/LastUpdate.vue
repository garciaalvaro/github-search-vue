<template>
	<div :class="styles.container">
		<label :for="styles.select">Last update</label>

		<select
			:id="styles.select"
			:class="styles.select"
			:value="last_update || ''"
			@change="e => updateLastUpdate(e.target.value)"
		>
			<option value="">Any time</option>
			<option value="last_week">Last week</option>
			<option value="last_month">Last month</option>
			<option value="last_6_months">Last 6 months</option>
			<option value="last_year">Last year</option>
			<option value="last_2_years">Last 2 years</option>
			<option value="last_3_years">Last 3 years</option>
		</select>
	</div>
</template>

<script src="./LastUpdate.ts" lang="ts"></script>
