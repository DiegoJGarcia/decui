import React, { FC, ReactElement } from 'react';
import './Layout.scss';

import { components, IComponent } from 'components';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from 'hooks/useTheme';

const Layout: FC = (): ReactElement => {
	const path = useLocation().pathname;
	const [theme, changeTheme] = useTheme('dark');

	return (
		// 3D, glass, movement support [TODO]
		<div className={`layout ${theme}`}>
			<div className="layout_header">
				<h1
					onClick={() => changeTheme(theme === 'light' ? 'dark' : 'light')}
					title="change-theme-title"
					className="titles"
				>
					DECUI LIBRERIA DE COMPONENTES REACT
				</h1>
			</div>
			<div className="layout_menu">
				<Link to="/" className="layout_menu_title subtitles">
					HOME
				</Link>
				<div className="layout_menu_links">
					{components.map((component: IComponent<unknown>) => (
						<Link
							className={`layout_menu_links_link labels${
								path.includes(component.title.toLowerCase())
									? ' layout_menu_links_link--selected'
									: ''
							}`}
							key={component.title.toLowerCase()}
							to={component.title.toLowerCase()}
						>
							{component.title}
						</Link>
					))}
				</div>
			</div>
			<div className="layout_data">
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
