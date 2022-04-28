import React, { FC, ReactElement } from 'react';
import './Button.scss';

export type TButtonProps = {
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
	children?: any;
};

const Button: FC<TButtonProps> = ({ onClick, disabled, className, children }): ReactElement => {
	return (
		<button
			className={`button${disabled ? ' button--disabled' : ''} labeled${
				className ? ` ${className}` : ''
			}`}
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
