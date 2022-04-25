import React, { FC, ReactElement } from 'react';
import './Playground.scss';

import Code from './Code';

type TPlaygroundProps = {
	children?: any;
};

// With this component you can show components preview with a title and a description
const Playground: FC<TPlaygroundProps> = ({
	children = <div id="default">DEFAULT</div>,
}): ReactElement => {
	const name: string = children?.type?.name || children?.type;

	const toCopy = String(children);

	return (
		<div className="playground">
			<div className="playground_codes">
				<div className="playground_title titles">{name || 'Mi componente'}</div>
				<Code>{children}</Code>
			</div>
			<button
				className="playground_copy values"
				onClick={() => navigator.clipboard.writeText(toCopy)}
			>
				{/* <img /> copy the current code [TODO] */}
				COPY {'</>'}
			</button>
			<div className="playground_preview">{children}</div>
		</div>
	);
};

export default Playground;
