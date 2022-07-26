/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, useState } from 'react';
import './Code.scss';

import copy from 'assets/copy.png';
import check from 'assets/check.png';

type TCodeProps = {
	children?: any;
	toCopy?: string;
};

// With this component you can show components preview with a title and a description
const Code: FC<TCodeProps> = ({ children, toCopy }): ReactElement => {
	const [copied, setCopied] = useState<boolean>(false);

	const notString: boolean = typeof children !== 'string';

	//children data
	const props: any =
		(notString &&
			Object.keys(children?.props).map((key: string) => {
				return { name: key, value: children?.props[key] };
			})) ||
		[];
	const name: string = notString && (children?.type?.name || children?.type);
	const child: any = notString && children?.props.children;

	//some flags
	const hasProps: boolean = notString && props.length > 0 && props.length > 1 && !!props;
	const notCustom: boolean = notString && typeof children?.type === 'string';
	const multipleChilds: boolean = notString && child?.length > 1;

	const handleCopy = () => {
		setCopied(true);
		setTimeout(() => setCopied(false), 1000);
		return navigator.clipboard.writeText(String(toCopy));
	};

	return notString ? (
		<div className={`code${toCopy ? ' code--wrapper' : ''}`}>
			<div className="code--open">
				<code>{'<'}</code>
				<code id={notCustom ? 'equal' : 'name'}>{name}</code>
				{!hasProps && (child ? <code>{'>'}</code> : <code>{' />'}</code>)}
			</div>
			<div className="code--props">
				{props.map(
					(prop: any, index: number) =>
						prop.name !== 'children' && (
							<code id="prop" key={index + '-' + prop.name}>
								{prop.name}
								<code id="equal">=</code>
								<code id="ticks">
									{typeof prop.value === 'string' ? (
										<code>
											<code>{`"`}</code>
											{prop.value}
											<code>{`"`}</code>
										</code>
									) : typeof prop.value === 'boolean' ? (
										<code>
											<code id="equal">{`{`}</code>
											<code id="bool">{String(prop.value)}</code>
											<code id="equal">{`}`}</code>
										</code>
									) : typeof prop.value === 'object' ? (
										<code>
											<code id="equal">{`{`}</code>
											<code id="arrow">{`[`}</code>
											<code>
												{'"'}
												{prop.value[0]}
												{'"'}
												<code id="arrow">{`, `}</code>
												{'"'}
												{prop.value[1]}
												{'"'}
												<code id="arrow">{`, `}</code>
												{'"'}
												{prop.value[2]}
												{'"'}
												<code id="arrow">{` ...`}</code>
											</code>
											<code id="arrow">{`]`}</code>
											<code id="equal">{`}`}</code>
										</code>
									) : (
										<code>
											<code id="equal">{`{`}</code>
											<code id="arrow">{String(prop.value)}</code>
											<code id="equal">{`}`}</code>
										</code>
									)}
								</code>
							</code>
						),
				)}
			</div>
			{child ? (
				<code className="code">
					{hasProps && <code className="code--close">{'>'}</code>}
					<code id="child">
						{multipleChilds ? (
							child.length > 1 &&
							[...child].map((chi: any, index: number) => <Code key={index}>{chi}</Code>)
						) : (
							<Code>{child}</Code>
						)}
					</code>
					<code className="code--close">
						<code>{`</`}</code>
						<code id={notCustom ? 'equal' : 'name'}>{`${name}`}</code>
						<code>{`>`}</code>
					</code>
				</code>
			) : (
				<code className="code--close">{'/>'}</code>
			)}
			{!!toCopy && (
				<div className="code--wrapper--copy" onClick={handleCopy}>
					{copied ? <img src={check} alt="check-button" /> : <img src={copy} alt="copy-button" />}
				</div>
			)}
		</div>
	) : (
		<span>{children}</span>
	);
};

export default Code;
