import React, { FC, ReactElement } from 'react';
import './Button.scss';

export type TButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	children?: ReactElement;
};

const Button: FC<TButtonProps> = ({ onClick, disabled, children }): ReactElement => {
	return (
		<button
			className={`button${disabled ? ' button--disabled' : ''} labeled`}
			onClick={e => {
				e?.stopPropagation();
				onClick && onClick();
			}}
			disabled={disabled}
		>
			{children || 'Botón'}
		</button>
	);
};

export default Button;
