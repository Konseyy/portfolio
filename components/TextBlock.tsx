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
	annotation?: string;
	style?: { [key: string]: any };
}
const TextBlock: FC<Props> = ({
	children,
	className,
	title,
	description,
	id,
	annotation,
	style: styleProp,
}) => {
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
	const hrefInTitle = useMemo(
		() =>
			title
				? title.match(/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/)
				: null,
		[title]
	);
	const linkInDescription = useMemo(
		() =>
			description
				? description.match(/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/)
				: null,
		[description]
	);
	const matchesVariable = (content: string) => {
		const variableRegex = /([\s\S]*?)<var>(.*?)<\/var>([\s\S]*)/;
		return useMemo(() => content.match(variableRegex), [content]);
	};
	const matchesType = (content: string) => {
		const typeRegex = /([\s\S]*?)<type>(.*?)<\/type>([\s\S]*)/;
		return useMemo(() => content.match(typeRegex), [content]);
	};
	const highLightTypes = (content: string) => {
		const varMatch = matchesVariable(content);
		if (varMatch) {
			return (
				<span>
					{highLightTypes(varMatch[1])}
					<span className={style.highlightedVariable}>
						{highLightTypes(varMatch[2])}
					</span>
					{highLightTypes(varMatch[3])}
				</span>
			);
		}
		const typeMatch = matchesType(content);
		if (typeMatch) {
			return (
				<span>
					{highLightTypes(typeMatch[1])}
					<span className={style.highlightedType}>
						{highLightTypes(typeMatch[2])}
					</span>
					{highLightTypes(typeMatch[3])}
				</span>
			);
		}
		return <span>{content}</span>;
	};
	const TitleElement = () => {
		if (hrefInTitle) {
			return (
				<div>
					{hrefInTitle[1]}
					<a href={hrefInTitle[2]}>{hrefInTitle[3]}</a>
					{hrefInTitle[4]}
				</div>
			);
		} else {
			return <div>{title}</div>;
		}
	};
	const DescriptionElement = () => {
		if (linkInDescription) {
			return (
				<div>
					{linkInDescription[1]}
					<a href={linkInDescription[2]}>{linkInDescription[3]}</a>
					{linkInDescription[4]}
				</div>
			);
		} else return <div>{description}</div>;
	};
	const highlightedTextContent = highLightTypes(spacedOut);
	const ContentElement = () => {
		return highlightedTextContent;
	};
	if (typeof children !== 'string') {
		console.warn('Children passed to text block not string');
		return null;
	}
	return (
		<div className={`${className} ${style.root}`} id={id ?? ''}>
			{title && (
				<div className={style.titleBlock}>
					<TitleElement />
				</div>
			)}
			{description && (
				<div className={style.descriptionBlock}>
					<DescriptionElement />
				</div>
			)}
			<div className={style.textBlockContainer} style={styleProp}>
				<a
					className={style.copyButtonContainer}
					onClick={() => {
						navigator.clipboard.writeText(children);
					}}
				>
					<Image className={style.copyButton} src={copyIcon} />
				</a>
				{annotation && <div className={style.annotation}>{annotation}</div>}
				<div className={style.textBlock}>
					<ContentElement />
				</div>
			</div>
		</div>
	);
};

export default TextBlock;
