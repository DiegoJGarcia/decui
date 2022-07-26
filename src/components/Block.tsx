import React, { FC, ReactElement } from 'react';
import './Block.scss';

type BlockProps = {
	title?: string;
	children?: ReactElement;
};

const Block: FC<BlockProps> = ({ title, children }) => {
	return (
		<div className="block" style={{ gridArea: title }} id={title}>
			<div className="block_head">
				{title && <div className="subtitle">{title?.toUpperCase()} </div>}
			</div>
			<div className="block_list">{children}</div>
		</div>
	);
};

export default Block;
