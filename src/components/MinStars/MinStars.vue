<template>
	<div class="container container--content-column">
		<label html="min_stars">Minimum stars</label>

		<select id="min_stars" v-model="min_stars">
			<option value="">Any amount</option>
			<option value="10">{{ (10).toLocaleString() }}</option>
			<option value="100">{{ (100).toLocaleString() }}</option>
			<option value="1000">{{ (1000).toLocaleString() }}</option>
			<option value="10000">{{ (10000).toLocaleString() }}</option>
			<option value="50000">{{ (50000).toLocaleString() }}</option>
			<option value="100000">{{ (100000).toLocaleString() }}</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import { min_stars } from "../../store/state";

export default defineComponent({
	setup() {
		return { min_stars };
	}
});
</script>
