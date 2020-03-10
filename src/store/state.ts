import { computed, ref } from "@vue/composition-api";

import { encode } from "./utils/encode";
import { getPrevDateFrom } from "./utils/getPrevDateFrom";

export const repositories = ref<Record<Repository["id"], Repository>>({});

export const repositories_ids = ref<Repository["id"][]>([]);

export const repositories_found = ref(0);

export const keywords = ref("");

export const language = ref<Language>("");

export const last_update = ref<LastUpdate>("");

export const min_stars = ref<MinStars>("");

export const page = ref(1);

export const url = computed<string>(() =>
	keywords.value.length < 3
		? ""
		: [
				// Base
				"https://api.github.com/search/repositories?q=",

				// Keywords
				encode(keywords.value),

				// Language
				language.value ? `+language:${encode(language.value)}` : "",

				// Last Update
				last_update.value
					? `+pushed:>${encode(getPrevDateFrom(last_update.value))}`
					: "",

				// Stars
				min_stars.value ? `+stars:>${encode(min_stars.value)}` : "",

				// Page
				page.value > 1 ? `&page=${encode(page.value.toString())}` : ""
		  ].join("")
);

export const fetch_timeout = ref<null | NodeJS.Timeout>(null);

export const fetch_id = ref(0);

export const status = ref<Status>("characters_0");
