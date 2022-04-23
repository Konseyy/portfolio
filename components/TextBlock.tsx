import Image from 'next/image';
import React, { FC, useMemo } from 'react';
import style from './TextBlock.module.scss';
import copyIcon from '../public/static/img/copy.png';
interface Props {
	children: string;
	className?: string;
	id?: string;
	title?: string;
	description?: string;
}
const TextBlock: FC<Props> = ({
	children,
	className,
	title,
	description,
	id,
}) => {
	let titleElement: JSX.IntrinsicElements['div'] = null;
	if (typeof children !== 'string') {
		console.warn('Children passed to text block not string');
		return null;
	}
	//remove \n at start of string
	if (children[0] === '\n') {
		children = children.slice(1);
	}
	if (title && title[0] === '\n') {
		title = title.slice(1);
	}
	if (description && description[0] === '\n') {
		description = description.slice(1);
	}
	const spacedOut = useMemo(() => children.replace(/ /g, '  '), [children]);
	const hrefInTitle = title.match(
		/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/
	);
	if (hrefInTitle) {
		titleElement = useMemo(
			() => (
				<div>
					{hrefInTitle[1]}
					<a href={hrefInTitle[2]}>{hrefInTitle[3]}</a>
					{hrefInTitle[4]}
				</div>
			),
			[hrefInTitle]
		);
	}
	const linkInDescription = description
		? description.match(/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/)
		: null;
	const descriptionElement = useMemo(
		() =>
			linkInDescription ? (
				<div>
					{linkInDescription[1]}
					<a href={linkInDescription[2]}>{linkInDescription[3]}</a>
					{linkInDescription[4]}
				</div>
			) : (
				<div>{description}</div>
			),
		[linkInDescription]
	);
	const highLightTypes = (content: string) => {
		const variableRegex = /([\s\S]*?)<var>(.*?)<\/var>([\s\S]*)/;
		const matchesVariable = content.match(variableRegex);
		if (matchesVariable) {
			return (
				<span>
					{highLightTypes(matchesVariable[1])}
					<span className={style.highlightedVariable}>
						{highLightTypes(matchesVariable[2])}
					</span>
					{highLightTypes(matchesVariable[3])}
				</span>
			);
		}
		const typeRegex = /([\s\S]*?)<type>(.*?)<\/type>([\s\S]*)/;
		const matchesType = content.match(typeRegex);
		if (matchesType) {
			return (
				<span>
					{highLightTypes(matchesType[1])}
					<span className={style.highlightedType}>
						{highLightTypes(matchesType[2])}
					</span>
					{highLightTypes(matchesType[3])}
				</span>
			);
		}

		return <span>{content}</span>;
	};
	const highlightedContent = useMemo(
		() => highLightTypes(spacedOut),
		[spacedOut]
	);
	return (
		<div className={`${className} ${style.root}`} id={id ?? ''}>
			{title && <div className={style.titleBlock}>{titleElement ?? title}</div>}
			{description && (
				<div className={style.descriptionBlock}>{descriptionElement}</div>
			)}
			<div className={style.textBlock}>
				<a
					className={style.copyButtonContainer}
					onClick={() => {
						navigator.clipboard.writeText(children);
					}}
				>
					<Image className={style.copyButton} src={copyIcon} />
				</a>
				{highlightedContent}
			</div>
		</div>
	);
};

export default TextBlock;
