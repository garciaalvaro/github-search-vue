<template>
	<article :class="styles.container">
		<header>
			<h4>
				<a :href="repository.url" :class="styles.link">{{
					`${repository.user} / ${repository.name}`
				}}</a>
			</h4>
		</header>

		<section :class="styles.body">
			<p>{{ repository.description }}</p>
		</section>

		<footer :class="styles.footer">
			<div :class="styles.stars">
				<IconStar />

				<span>{{ repository.stars }}</span>
			</div>

			<span :class="styles.language">{{ repository.language }}</span>

			<span :class="styles.license">{{ repository.license }}</span>

			<span :class="styles.updated">{{ repository.updated }}</span>
		</footer>
	</article>
</template>

<script src="./Repository.ts" lang="ts"></script>
