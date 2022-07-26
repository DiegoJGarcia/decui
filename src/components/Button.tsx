import React, { FC, ReactElement, useEffect, useState } from 'react';
import './Button.scss';

import error from 'assets/no-back-error.svg';
import ok from 'assets/no-back-success.svg';

type ButtonProps = {
	type?: string;
	className?: string;
	icon?: string;
	onClick?: () => void;
	children?: ReactElement | string | number;
	disabled?: boolean;
	async?: boolean;
	flux?: string;
};

const Button: FC<ButtonProps> = ({
	type,
	className,
	icon,
	onClick,
	children,
	disabled,
	async = false,
	flux = 'forward',
}) => {
	const [status, setStatus] = useState<string>('');

	useEffect(() => {
		setTimeout(() => {
			setStatus('');
		}, 3000);
		return;
	}, [status]);

	const clicked = async () => {
		setStatus('ok');

		try {
			onClick && (await onClick());
		} catch {
			setStatus('error');
		}

		return;
	};

	return (
		<button
			className={
				'button label' +
				`${type ? ` button--${type}` : ''}` +
				`${className ? ` ${className}` : ''}` +
				`${status !== '' ? ` button--${status}` : ''}`
			}
			onClick={e => {
				e?.stopPropagation();
				clicked();
			}}
			disabled={disabled || (async && status !== '')}
		>
			{icon && type !== 'circle' && flux === 'back' && (
				<img className="button_icon button_icon--back" src={icon} alt="button_icon" />
			)}
			{async && status !== '' ? (
				<div className={'button_progress' + ` button_progress--${status}`}>
					<img src={status === 'error' ? error : ok} alt={status} />
				</div>
			) : (
				children
			)}
			{icon && type !== 'circle' && flux === 'forward' && (
				<img className="button_icon button_icon--forward" src={icon} alt="button_icon" />
			)}
		</button>
	);
};

export default Button;

// import React, { FC, ReactElement } from 'react';
// import './Button.scss';

// export type TButtonProps = {
// 	onClick?: () => void;
// 	disabled?: boolean;
// 	className?: string;
// 	children?: any;
// };

// const Button: FC<TButtonProps> = ({ onClick, disabled, className, children }): ReactElement => {
// 	return (
// 		<button
// 			className={`button${disabled ? ' button--disabled' : ''} labeled${
// 				className ? ` ${className}` : ''
// 			}`}
// 			onClick={e => {
// 				e?.stopPropagation();
// 				onClick && onClick();
// 			}}
// 			disabled={disabled}
// 		>
// 			{children || 'Botón'}
// 		</button>
// 	);
// };

// export default Button;
