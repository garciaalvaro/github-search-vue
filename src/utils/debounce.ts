let timeout: NodeJS.Timeout | null = null;

export const debounce = (callback: () => void, time = 1000): void => {
	if (timeout) {
		clearTimeout(timeout);
	}

	timeout = setTimeout(() => {
		timeout = null;

		callback();
	}, time);
};
