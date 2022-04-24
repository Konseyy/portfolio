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
	title: string;
	description: string;
	repo_link: string;
	live_link?: string;
	repoNewTab?: boolean;
	demoNewTab?: boolean;
}
const Project: FC<ProjectProps> = ({
	technologies,
	title,
	description,
	repo_link,
	live_link,
	repoNewTab = true,
	demoNewTab = true,
}) => {
	const [showMore, setShowMore] = useState(false);
	const MAX_DESCRIPTION_DISPLAY = 95;
	const descriptionOverflow = description.length - 10 > MAX_DESCRIPTION_DISPLAY;
	return (
		<div className={styles.root}>
			<a
				rel="noreferrer"
				tabIndex={-1}
				className={styles.titleContainer}
				href={live_link ?? repo_link}
				onClick={(e) => e.preventDefault()}
			>
				<h1
					tabIndex={0}
					className={styles.title}
					onClick={() =>
						openInBrowser(
							live_link ?? repo_link,
							live_link ? demoNewTab : repoNewTab
						)
					}
				>
					{title}
				</h1>
			</a>
			<div className={styles.linkContainer}>
				{live_link && (
					<a
						rel="noreferrer"
						tabIndex={-1}
						className={styles.liveLinkContainer}
						href={live_link}
						onClick={(e) => e.preventDefault()}
					>
						<div
							tabIndex={0}
							className={styles.liveLink}
							onClick={() => openInBrowser(live_link, demoNewTab)}
						>
							<div className={styles.linkImageContainer}>
								<Image src={demo} alt={`demo link for ${title}`} />
							</div>
							<p>Demo</p>
						</div>
					</a>
				)}
				<a
					rel="noreferrer"
					tabIndex={-1}
					className={styles.repoLinkContainer}
					href={repo_link}
					onClick={(e) => e.preventDefault()}
				>
					<div
						tabIndex={0}
						className={styles.repoLink}
						onClick={() => openInBrowser(repo_link, repoNewTab)}
					>
						<div className={styles.linkImageContainer}>
							<Image src={code} alt={`repository link for ${title}`} />
						</div>
						<p>Source</p>
					</div>
				</a>
			</div>

			<div className={styles.contentContainer}>
				<p className={styles.description}>
					{descriptionOverflow && !showMore ? (
						<>
							{!showMore &&
								`${description.substring(0, MAX_DESCRIPTION_DISPLAY)}... `}
							{!showMore && (
								<span
									tabIndex={0}
									onClick={() => setShowMore(true)}
									className={styles.readMore}
								>
									show more
								</span>
							)}
						</>
					) : (
						description
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
