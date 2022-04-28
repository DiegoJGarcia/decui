import React, { FC } from 'react';
import './Header.scss';

import Button from 'components/Button';

type HeaderProps = {
	status?: string;
};

const Header: FC<HeaderProps> = ({ status }) => {
	return (
		<div className="header">
			<div className="title">PROFILER</div>
			<div className="label">{status}</div>
			<div className="header_user">
				<Button>Botón</Button>
			</div>
		</div>
	);
};

export default Header;
