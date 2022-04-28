import React, { FC } from 'react';
import './Rating.scss';

type RatingProps = {
	icon?: string;
	title?: string;
	rate?: string;
	onClick?: () => void;
	disabled?: boolean;
};

const Rating: FC<RatingProps> = ({ icon, onClick, title, rate }) => {
	return (
		<div onClick={onClick} className="rating">
			{icon && <img src={icon} alt={title} />}
			<b className="value">{rate}</b>
			<span>{title}</span>
		</div>
	);
};

export default Rating;
