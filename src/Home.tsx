import React, { FC, ReactElement } from 'react';
import './Home.scss';

import gh from 'assets/GH.svg';

const Home: FC = (): ReactElement => {
	const url = 'https://github.com/DiegoJGarcia/decui';

	return (
		<div className="home">
			<img
				className="home_code"
				src={gh}
				alt="code_url"
				onClick={() => window.open(url, 'blank')}
			/>
			<h1 className="titles">WELCOME TO DEC UI, THE BEST UI LIBRARY YOU WILL KNOW TODAY</h1>
		</div>
	);
};

export default Home;
