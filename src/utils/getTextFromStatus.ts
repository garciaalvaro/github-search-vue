export const getTextFromStatus = (status: State["status"]): string => {
	switch (status) {
		case "CHARACTERS_0":
			return "Enter some text in the search field above";

		case "CHARACTERS_1":
			return "Enter 2 more characters";

		case "CHARACTERS_2":
			return "Enter 1 more character";

		case "TOO_MANY_REQUESTS":
			return (
				"It looks like too many requests were made. " +
				"Please try again in a minute."
			);

		case "ERROR":
			return (
				"It looks like there was an error getting the data. " +
				"Please try again in some time."
			);

		case "WAITING":
			return "Waiting...";

		case "LOADING":
			return "Loading...";

		case "NO_RESULTS":
			return "No results";

		default:
			return "";
	}
};
