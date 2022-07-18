import React, { FC, useState } from 'react';
import './Selector.scss';

type TSelectorProps = {
	options: string[];
	selected?: string;
	selector?: string[];
	onClick?: (option: string) => void;
	row?: boolean;
};

const Selector: FC<TSelectorProps> = ({
	selector,
	options,
	selected = options[0],
	onClick,
	row,
}) => {
	const [opSelected, setOpSelected] = useState<string>(selected);

	const changeOption = async (op: string) => {
		onClick && (await onClick(op));
		setOpSelected(op);
	};

	return (
		<div className={`selector${row ? ' selector--row' : ''}`}>
			{options?.map((opt: string, index: number) => (
				<div
					className={`selector_option${
						opt === opSelected ? ' selector_option--selected' : ''
					} label`}
					key={opt}
					onClick={() => changeOption(opt)}
				>
					{selector ? selector[index] : opt}
				</div>
			))}
		</div>
	);
};

export default Selector;
