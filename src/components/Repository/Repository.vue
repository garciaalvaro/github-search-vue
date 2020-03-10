<template>
	<article class="item">
		<header>
			<h4>
				<a href="url" class="item__link"
					>{{ repository.user }} / {{ repository.name }}</a
				>
			</h4>
		</header>

		<section class="item__body">
			<p>{{ repository.description }}</p>
		</section>

		<footer class="container container--content-fluid">
			<div class="item__stars">
				<!-- https://material.io/tools/icons/?icon=star -->
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</svg>

				<span>{{ repository.stars }}</span>
			</div>

			<span class="item__language">{{ repository.language }}</span>

			<span class="item__license">{{ repository.license }}</span>

			<span class="item__updated">{{ repository.updated }}</span>
		</footer>
	</article>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";

import { repositories } from "../../store/state";

export default defineComponent({
	props: {
		id: { type: Number, required: true }
	},

	setup(props) {
		const { id } = props;
		const repository = computed(() => repositories.value[id]);

		return { repository };
	}
});
</script>

<style>
@import "./Repository.styl";
</style>
