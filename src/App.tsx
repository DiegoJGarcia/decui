import React, { FC, ReactElement } from 'react';

import Layout from 'layouts/Layout';
import Playground from 'layouts/Playground';

import { Route, Routes } from 'react-router-dom';

import { components, IComponent } from 'components';

import Home from 'Home';

const App: FC = (): ReactElement => {
	return (
		<Routes>
			<Route path="/" element={<Layout headerTitle="DECUI LIBRERIA DE COMPONENTES REACT" />}>
				<Route index element={<Home />} />
				{/* change "components" reading [TODO] */}
				{components.map((component: IComponent) => (
					<Route
						key={component.title}
						path={component.title.toLowerCase()}
						element={
							<Playground name={component.title} toCopy={component.toCopy}>
								{component.element}
							</Playground>
						}
					/>
				))}
			</Route>
		</Routes>
	);
};

export default App;
