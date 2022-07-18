import React, { FC, useEffect, useRef, useState } from 'react';

import './Text.scss';

type TextProps = {
	name: string;
	label?: string;
	value?: any;
	placeholder?: string;
	readOnly?: boolean;
	onBlur?: () => void;
	onClick?: () => void;
	onChange?: (e: any) => void;
	max?: number;
	className?: string;
	align?: string;
	prefix?: string;
	suffix?: string;
	showFix?: boolean;
	inputmode?: any;
	maxWidth?: number;
	firstFocus?: boolean;
};

const Text: FC<TextProps> = ({
	name,
	value,
	onChange,
	readOnly,
	placeholder,
	max = 24,
	className,
	align = 'center',
	prefix,
	suffix,
	showFix,
	label,
	inputmode = 'text',
	onClick,
	onBlur,
	maxWidth,
	firstFocus,
}) => {
	const [text, setText] = useState<string>('');

	const textRef = useRef<any>();

	useEffect(() => {
		firstFocus && textRef?.current.focus();
		textRef.current.style.height = '0px';
		const scrollHeight = textRef.current.scrollHeight;
		textRef.current.style.height = scrollHeight + 'px';

		return;
	}, [value, text]);

	const innerChange = (e: any) => setText(e.target.value);

	return (
		<div className="text" onClick={onClick} onBlur={onBlur} style={{ maxWidth: maxWidth + 'px' }}>
			{label && (
				<label className={'text_label label' + `${align ? ` text_label--${align}` : ''}`}>
					{label}
				</label>
			)}
			<div className="text_input">
				{(showFix || (value && prefix)) && <div className="ref text--extra">{prefix}</div>}
				<textarea
					inputMode={inputmode}
					ref={textRef}
					name={name}
					className={
						'text_area' +
						`${readOnly ? ' text_area--non-editable' : ''}` +
						`${className ? ` ${className}` : ''}` +
						`${align ? ` text_area--${align}` : ''}`
					}
					onKeyPress={e => e.key === 'Enter' && textRef.current.blur()}
					placeholder={placeholder || name}
					onChange={onChange || innerChange}
					spellCheck={false}
					readOnly={readOnly}
					value={value || text}
					maxLength={max}
				/>
				{(showFix || (value && suffix)) && <div className="ref text--extra">{suffix}</div>}
			</div>
		</div>
	);
};

export default Text;
