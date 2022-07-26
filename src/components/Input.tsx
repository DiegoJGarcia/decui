import React, { ChangeEventHandler, FC, KeyboardEventHandler, useEffect, useState } from 'react';
import './Input.scss';

type TypeInput = {
	name: string;
	value?: string | number;
	onChange: ChangeEventHandler<HTMLInputElement>;
	onBlur?: ChangeEventHandler<HTMLInputElement>;
	onKeyPress?: KeyboardEventHandler<HTMLInputElement>;
	editable?: boolean;
	type?: string;
	label?: string;
	required?: boolean;
	error?: string;
	className?: string;
};

const Input: FC<TypeInput> = ({
	name,
	value,
	onChange,
	onBlur,
	onKeyPress,
	editable = true,
	label,
	type = 'text',
	required = false,
	error,
	className,
}) => {
	const [status, setStatus] = useState<string>();

	useEffect(() => {
		if (error) {
			setStatus('error');
		} else if (value) {
			type !== 'custom' && setStatus('finish');
		}
	}, [error, value, type]);

	return (
		<div
			className={
				'input' +
				`${status ? ` input--${status}` : ''}` +
				` ${!editable ? ' input--non-editable' : ''}` +
				`${className ? ` ${className}` : ''}`
			}
		>
			{label && (
				<label htmlFor={name} className="label">
					{`${label}${required ? ' *' : ''} `}
				</label>
			)}
			<input
				className="input_typer label"
				name={name}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				onKeyPress={onKeyPress}
				readOnly={!editable}
				type={type}
			/>
			{error && <p className="input_errors">{error}</p>}
		</div>
	);
};

export default Input;
