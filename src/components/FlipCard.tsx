import React, { FC, ReactElement } from 'react';
import './FlipCard.scss';

type FlipCardProps = {
	front: ReactElement | string | number;
	back: ReactElement | string | number;
	frontFace: boolean;
};

const FlipCard: FC<FlipCardProps> = ({ front, back, frontFace }) => {
	return (
		<div className="flip">
			<div className={`flip_body${!frontFace ? ' flip_body--backface' : ''}`}>
				<div className="flip_front">{front}</div>
				<div className="flip_back">{back}</div>
			</div>
		</div>
	);
};

export default FlipCard;
