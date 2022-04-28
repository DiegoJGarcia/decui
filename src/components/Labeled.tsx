import React, { FC } from 'react';
import './Labeled.scss';

type LabeledProps = {
	label?: string;
	input?: any;
	icon?: string;
	active?: boolean;
	mirror?: boolean;
	onClick?: () => void;
};

const Labeled: FC<LabeledProps> = ({ label, input, icon, active, onClick, mirror }) => {
	return (
		<div
			onClick={onClick}
			className={
				'labeled' +
				`${!label ? ` labeled--nolabel` : ''}` +
				`${active ? ' labeled--active' : ''}` +
				`${input ? ' labeled--editable' : ''}`
			}
		>
			{!mirror &&
				(icon ? (
					<img className="labeled_icon" src={icon} alt={label} />
				) : (
					<h2 className="values">{String(label)[0].toUpperCase()}</h2>
				))}
			<p className="labeled_label">{input || label}</p>
			{mirror &&
				(icon ? (
					<img className="labeled_icon" src={icon} alt={label} />
				) : (
					<h2 className="values">{String(label)[0].toUpperCase()}</h2>
				))}
		</div>
	);
};

export default Labeled;
