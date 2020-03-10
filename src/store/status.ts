import { watch } from "@vue/composition-api";

import { keywords, status } from "./state";

watch(keywords, keywords => {
	if (keywords.length === 0) {
		status.value = "characters_0";
	} else if (keywords.length === 1) {
		status.value = "characters_1";
	} else if (keywords.length === 2) {
		status.value = "characters_2";
	}
});
