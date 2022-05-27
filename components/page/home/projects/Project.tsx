import React, { FC, useState } from 'react';
import { ImageLinkProps } from '@/components/image_link/ImageLink';
import Image from 'next/image';
import { openInBrowser } from '@/helpers/openInBrowser';
import ImageLink from '@/components/image_link/ImageLink';
import code from '@/img/code.png';
import demo from '@/img/demo.png';
import styles from './Project.module.scss';
export interface ProjectProps {
	technologies: ImageLinkProps[];
	preview: StaticImageData;
	title: string;
	description: string;
	repo_link: string;
	live_link?: string;
	annotateRight?: boolean;
}
const Project: FC<ProjectProps> = ({
	technologies,
	preview,
	title,
	description,
	repo_link,
	live_link,
	annotateRight = true,
}) => {
	const defaultLink = live_link ?? repo_link;
	const links = (
		<div className={styles.links}>
			{live_link && (
				<a
					rel="noreferrer"
					tabIndex={-1}
					className={styles.linkContainer}
					href={live_link}
				>
					<div tabIndex={0} className={styles.liveLink}>
						<div className={styles.linkImageContainer}>
							<Image priority src={demo} alt={`demo link for ${title}`} />
						</div>
						<p>Demo</p>
					</div>
				</a>
			)}
			<a
				rel="noreferrer"
				tabIndex={-1}
				className={styles.linkContainer}
				href={repo_link}
			>
				<div tabIndex={0} className={styles.repoLink}>
					<div className={styles.linkImageContainer}>
						<Image src={code} alt={`repository link for ${title}`} />
					</div>
					<p>Source</p>
				</div>
			</a>
		</div>
	);
	return (
		<div className={styles.root}>
			<div
				className={`${styles.projectContainer} ${
					annotateRight ? styles.annotateRight : styles.annotateLeft
				}`}
			>
				<a target="_blank" href={defaultLink} className={styles.preview}>
					<Image src={preview} />
				</a>
				<div className={styles.info}>
					<div className={styles.annotation}>
						<div className={styles.meta}>
							<div className={styles.metaTop}>
								{annotateRight && links}
								<a target="_blank" href={defaultLink} className={styles.title}>
									{title}
								</a>
								{!annotateRight && links}
							</div>
							<p className={styles.description}>{description}</p>
						</div>
					</div>
					<div className={styles.techonologiesContainer}>
						<div className={styles.technologiesAnnotation}>
							Techonologies used
						</div>
						<ul className={styles.technologies}>
							{technologies.map((technology) => (
								<li>
									<ImageLink {...technology} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
