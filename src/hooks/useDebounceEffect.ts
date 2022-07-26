import { useEffect } from 'react';

export const useDebounceEffect = <T>(method: () => void, deps: T, delay?: number): void => {
	useEffect(() => {
		const handler = setTimeout(() => method(), delay || 2000);

		return () => clearTimeout(handler);
	}, [deps, delay, method]);
};
