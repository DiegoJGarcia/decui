import { useEffect, useState } from 'react';

export const useComplete = (item: Record<string, string>, condition?: string[]): boolean => {
	const [completed, setCompleted] = useState(false);

	useEffect(() => {
		const notCompleted = !condition?.find((name: string) => item[name] === '' || !item[name]);
		setCompleted(notCompleted);
		return;
	}, [item, condition]);

	return completed;
};
