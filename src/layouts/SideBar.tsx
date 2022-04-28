import React, { FC, useState } from 'react';
import './SideBar.scss';

import Labeled from '../components/Labeled';

type SideBarProps = {
	activeSections: any;
	handleSection: (section: any) => void;
	top?: any;
	bottom?: any;
};
const SideBar: FC<SideBarProps> = ({ activeSections, handleSection, top, bottom }) => {
	const [closed, setClosed] = useState<boolean>(false);

	return (
		<div className={'sidebar' + `${closed ? ' sidebar--closed' : ''}`}>
			{top && <div className="sidebar_top">{top}</div>}
			<div className="sidebar_body">
				<div className="sidebar_body_title label">Secciones</div>
				<div className="sidebar_body_sections">
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
