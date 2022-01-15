import React, { FC, useState } from 'react';
import { ImageLinkProps } from './ImageLink';
import Image from 'next/image';
import { openInNewTab } from '../functions/openInNewTab';
import ImageLink from './ImageLink';
import link from '../public/static/img/link.png';
import code from '../public/static/img/code.png';
import demo from '../public/static/img/demo.png';
import styles from './Project.module.css';
export interface ProjectProps {
	technologies: ImageLinkProps[];
	title: string;
	description: string;
	repo_link: string;
	live_link?: string;
	hoverColor?: string;
}
const Project: FC<ProjectProps> = ({
	technologies,
	title,
	description,
	repo_link,
	live_link,
	hoverColor,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showMore, setShowMore] = useState(false);
	const MAX_DESCRIPTION_DISPLAY = 95;
	const descriptionOverflow = description.length - 10 > MAX_DESCRIPTION_DISPLAY;
	return (
		<div
			className={`${styles.root} ${isHovered ? styles.hover : ''}`}
			style={{
				backgroundColor: isHovered && hoverColor ? hoverColor : 'transparent',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={styles.titleContainer}>
				<h1 className={styles.title} onClick={() => openInNewTab(repo_link)}>
					{title}
				</h1>
			</div>
			<div className={styles.linkContainer}>
				{live_link && (
					<div className={styles.liveLinkContainer}>
						<div
							className={styles.liveLink}
							onClick={() => openInNewTab(live_link)}
						>
							<div className={styles.linkImageContainer}>
								<Image src={demo} />
							</div>
							<p>Demo</p>
						</div>
					</div>
				)}
				<div className={styles.repoLinkContainer}>
					<div
						className={styles.repoLink}
						onClick={() => openInNewTab(repo_link)}
					>
						<div className={styles.linkImageContainer}>
							<Image src={code} />
						</div>
						<p>Repository</p>
					</div>
				</div>
			</div>

			<div className={styles.contentContainer}>
				<p className={styles.description}>
					{descriptionOverflow
						? showMore
							? description
							: `${description.substring(0, MAX_DESCRIPTION_DISPLAY)}...`
						: description}
					{descriptionOverflow && !showMore && (
						<span onClick={() => setShowMore(true)} className={styles.readMore}>
							show more
						</span>
					)}
				</p>
				<div className={styles.technologiesSection}>
					<h1 className={styles.technologiesHeader}>Technologies used ⤵︎</h1>
					<div className={styles.technologiesContainer} key="container">
						{technologies.map((technology) => {
							return (
								<ImageLink
									key={technology.title}
									{...technology}
									size={60}
									labelBackground={true}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
