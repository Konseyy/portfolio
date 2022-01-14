import React, { FC, useState } from 'react';
import { ImageLinkProps } from './ImageLink';
import ImageLink from './ImageLink';
import styles from './Project.module.css';
interface ProjectProps {
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
	// TODO live link and repo link buttons
	return (
		<div
			className={`${styles.root} ${isHovered ? styles.hover : ''}`}
			style={{
				backgroundColor: isHovered && hoverColor ? hoverColor : 'transparent',
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.contentContainer}>
				<p className={styles.description}>{description}</p>
				<div className={styles.technologiesSection}>
					<h1 className={styles.technologiesHeader}>Made using ⤵︎</h1>
					<div className={styles.technologiesContainer} key="container">
						{technologies.map((technology) => {
							return (
								<ImageLink key={technology.title} {...technology} size={60} />
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
