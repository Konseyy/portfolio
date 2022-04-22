import Image from 'next/image';
import React, { FC } from 'react';
import style from './TextBlock.module.scss';
import copyIcon from '../public/static/img/copy.png';
interface Props {
	children: string;
	className?: string;
	title?: string;
}
const TextBlock: FC<Props> = ({ children, className, title }) => {
	if (typeof children !== 'string') {
		console.warn('Children passed to text block not string');
		return null;
	}
	//remove \n at start of string
	if (children[0] === '\n') {
		children = children.slice(1);
	}
	return (
		<>
			{title && <div className={style.titleBlock}>{title}</div>}
			<div className={`${className} ${style.root}`}>
				<a
					className={style.copyButtonContainer}
					onClick={() => {
						navigator.clipboard.writeText(children);
					}}
				>
					<Image className={style.copyButton} src={copyIcon} />
				</a>
				{children}
			</div>
		</>
	);
};

export default TextBlock;
