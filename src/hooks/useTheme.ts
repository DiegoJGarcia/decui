import { useEffect, useState } from 'react';

type TypeUseThemeResponse = [theme: string, changeTheme: (newTheme: string) => void];

export const useTheme = (starter = 'light'): TypeUseThemeResponse => {
	const [theme, setTheme] = useState<string>(starter);

	useEffect(() => {
		const currentTheme: string = localStorage.getItem('theme') || starter;
		setTheme(currentTheme);
		return;
	}, [starter]);

	const changeTheme = (newTheme: string) => {
		localStorage.setItem('theme', newTheme);
		setTheme(newTheme);
	};

	return [theme, changeTheme];
};
