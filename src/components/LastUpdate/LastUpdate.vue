<template>
	<div class="container container--content-column">
		<label html="last_update">Last update</label>

		<select id="last_update" v-model="last_update">
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

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { last_update } from "../../store/state";

export default defineComponent({
	setup() {
		return { last_update };
	}
});
</script>
