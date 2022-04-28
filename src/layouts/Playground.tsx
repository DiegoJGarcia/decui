import React, { FC, ReactElement } from 'react';
import './Playground.scss';

import Code from './Code';

type TPlaygroundProps = {
	children?: any;
	toCopy?: string;
};

// With this component you can show components preview with a title and a description
const Playground: FC<TPlaygroundProps> = ({
	children = <div id="default">DEFAULT</div>,
	toCopy,
}): ReactElement => {
	const name: string = children?.type?.name || children?.type;

	return (
		<div className="playground">
			<div className="playground_codes">
				<div className="playground_title titles">{name || 'Mi componente'}</div>
				<Code toCopy={toCopy}>{children}</Code>
			</div>
			<div className="playground_preview">{children}</div>
		</div>
	);
};

export default Playground;
