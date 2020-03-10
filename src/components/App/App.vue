<template>
	<main id="content">
		<Heading />

		<Keywords />

		<div id="container-filters" class="container container--content-fluid">
			<LastUpdate />
			<MinStars />
			<Languages />
		</div>

		<Status />

		<Results />
	</main>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

import Heading from "../Heading/Heading";
import Languages from "../Languages/Languages";
import LastUpdate from "../LastUpdate/LastUpdate";
import MinStars from "../MinStars/MinStars";
import Keywords from "../Keywords/Keywords";
import Results from "../Results/Results";
import Status from "../Status/Status";

export default defineComponent({
	components: {
		Heading,
		Languages,
		LastUpdate,
		MinStars,
		Keywords,
		Results,
		Status
	}
});
</script>

<style>
@import "./App.styl";
</style>
