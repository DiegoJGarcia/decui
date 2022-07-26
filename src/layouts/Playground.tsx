import React, { FC, ReactElement } from 'react';
import './Playground.scss';

import Code from './Code';

type TPlaygroundProps = {
	name?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children?: any;
	toCopy?: string;
};

// With this component you can show components preview with a title and a description
const Playground: FC<TPlaygroundProps> = ({
	name,
	children = <div id="default">DEFAULT</div>,
	toCopy,
}): ReactElement => {
	const autoName: string = children?.type?.name || children?.type || 'Mi componente';

	return (
		<div className="playground">
			<div className="playground_codes">
				<div className="playground_title titles">{name || autoName}</div>
				<Code toCopy={toCopy}>{children}</Code>
			</div>
			<div className="playground_preview">{children}</div>
		</div>
	);
};

export default Playground;
