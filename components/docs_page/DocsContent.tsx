import React, { FC, useMemo } from 'react';
import { DocsData } from './DocsData';
import TextBlock from '../TextBlock';
import style from './DocsContent.module.scss';

const DocsContent = () => {
	const host = typeof window !== 'undefined' ? window.location.host : '';
	const FormattedDescription: FC<{ description: string }> = ({
		description,
	}) => {
		const linkInDescription = useMemo(
			() =>
				description
					? description.match(/(.*?)<a.*? href="(.*?)"[.\s]*?>(.*?)<\/a>(.*)/)
					: null,
			[description]
		);
		if (linkInDescription) {
			return (
				<div>
					{linkInDescription[1]}
					<a href={linkInDescription[2]}>{linkInDescription[3]}</a>
					{linkInDescription[4]}
				</div>
			);
		} else {
			return <div>{description}</div>;
		}
	};
	return (
		<div className={style.root}>
			<div className={style.middleSection}>
				{DocsData.map((section) => {
					return (
						<div key={section.id} className={style.sectionBlockContainer}>
							<div id={section.id} className={style.sectionTitle}>
								{section.title}
							</div>
							<div className={style.sectionDescription}>
								<FormattedDescription description={section.description} />
							</div>
							<div>
								{section.entryGroups.map((group) => {
									return group.entries.map((block, idx) => {
										return (
											<div className={style.sectionGroup}>
												<TextBlock
													key={idx}
													id={block.id ?? ''}
													className={`${style.textBlock} ${
														group.link ? style.withLink : ''
													}`}
													title={block.title ?? ''}
													description={block.description ?? ''}
													style={{
														paddingTop: '.2em',
														paddingBottom: '.3em',
													}}
												>
													{group.link
														? `${host}${group.link}`
														: block.textBlock}
												</TextBlock>
												{group.link && <TextBlock>{block.textBlock}</TextBlock>}
											</div>
										);
									});
								})}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default DocsContent;
