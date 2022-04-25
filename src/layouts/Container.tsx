import React, { FC, ReactElement } from 'react';
import './Container.scss';

interface ContainerProps {
	className?: string;
	children?: ReactElement | ReactElement[];
}

// With this component you can get a pretty responsive container faster and better
const Container: FC<ContainerProps> = ({ className, children }): ReactElement => {
	return <div className={`container${className ? ` ${className}` : ''}`}>{children}</div>;
};

export default Container;
