/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, useState } from 'react';
import './SideBar.scss';

import Labeled from '../components/Labeled';

type SideBarProps = {
	activeSections: any[];
	handleSection: (section: any) => void;
	top?: ReactElement | string | number;
	bottom?: ReactElement | string | number;
};
const SideBar: FC<SideBarProps> = ({ top, bottom, activeSections, handleSection }) => {
	const [closed, setClosed] = useState<boolean>(false);

	return (
		<div className={'sidebar' + `${closed ? ' sidebar--closed' : ''}`}>
			{top && <div className="sidebar_top">{top}</div>}
			<div className="sidebar_body">
				<div className="sidebar_body_title label">Secciones</div>
				<div className="sidebar_body_sections">
					{/* [TODO] DEFINIR EL TYPE */}
					{activeSections?.map((section: any) => (
						<Labeled
							key={section.name}
							active={section.active}
							onClick={() => handleSection(section)}
							label={section.label?.toUpperCase()}
						/>
					))}
				</div>
			</div>
			<div className="sidebar_bottom">
				{bottom}
				<div className="sidebar_bottom_arrow" onClick={() => setClosed(!closed)}>
					<img
						// src={arrow}
						alt="show-hide-menu"
						className={`sidebar_bottom_arrow_image${
							closed ? ' sidebar_bottom_arrow_image--closed' : ''
						}`}
					/>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
