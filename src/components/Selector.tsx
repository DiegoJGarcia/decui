import React, { FC } from 'react';
import './Selector.scss';

type TSelectorProps = {
	options: string[];
	selected?: string;
	selector?: string[];
	onClick?: (option: string) => void;
	row?: boolean;
};

const Selector: FC<TSelectorProps> = ({ selector, options, selected, onClick, row }) => {
	return (
		<div className={`selector${row ? ' selector--row' : ''}`}>
			{options?.map((opt: string, index: number) => (
				<div
					className={`selector_option${opt === selected ? ' selector_option--selected' : ''} label`}
					key={opt}
					onClick={() => onClick && onClick(opt)}
				>
					{selector ? selector[index] : opt}
				</div>
			))}
		</div>
	);
};

export default Selector;
