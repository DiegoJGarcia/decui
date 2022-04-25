import React, { FC, ReactElement } from 'react';
import './Code.scss';

type TCodeProps = {
	children?: any;
};

// With this component you can show components preview with a title and a description
const Code: FC<TCodeProps> = ({ children }): ReactElement => {
	const notString = typeof children !== 'string';

	//children data
	const props =
		(notString &&
			Object.keys(children?.props).map((key: string) => {
				return { name: key, value: children?.props[key] };
			})) ||
		[];
	const name = notString && (children?.type?.name || children?.type);
	const child = notString && children?.props.children;

	//some flags
	const hasProps = notString && props.length > 0 && props.length > 1 && !!props;
	const notCustom = notString && typeof children?.type === 'string';
	const multipleChilds = notString && child?.length > 1;

	return notString ? (
		<div className="code">
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
									) : typeof prop.value === 'object' ? (
										<code>
											<code id="equal">{`{`}</code>
											<code>{`[`}</code>
											<code>
												{'"'}
												{prop.value[0]}
												{'"'}
												{', '}
												{'"'}
												{prop.value[1]}
												{'"'}
												{', '}
												{'"'}
												{prop.value[2]}
												{'" ...'}
											</code>
											<code>{`]`}</code>
											<code id="equal">{`}`}</code>
										</code>
									) : (
										<code>
											<code id="equal">{`{`}</code>
											{String(prop.value)}
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
		</div>
	) : (
		<span>{children}</span>
	);
};

export default Code;
