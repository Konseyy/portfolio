import React, { useMemo } from 'react';
import { DocsData } from './DocsData';
import TextBlock from '../TextBlock';
import style from './DocsContent.module.scss';

const DocsContent = () => {
	return (
		<div className={style.root}>
			<div className={style.middleSection}>
				{DocsData.map((section) => {
					const linkInDescription = section.description
						? section.description.match(
								/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/
						  )
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
								<div>{section.description}</div>
							),
						[linkInDescription]
					);

					return (
						<div
							key={section.id}
							id={section.id}
							className={style.sectionBlockContainer}
						>
							<div className={style.sectionTitle}>{section.title}</div>
							<div className={style.sectionDescription}>
								{descriptionElement}
							</div>
							<div>
								{section.entries.map((block, idx) => (
									<TextBlock
										key={idx}
										id={block.id ?? ''}
										className={style.textBlock}
										title={block.title ?? ''}
										description={block.description ?? ''}
									>
										{block.textBlock}
									</TextBlock>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DocsContent;
