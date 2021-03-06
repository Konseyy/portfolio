import React, { FC } from 'react';
import Project, { ProjectProps } from './Project';
import portfolio from '@/img/preview/portfolio.png';
import styles from './ProjectsList.module.scss';
import projects from './ProjectsData';
interface Props {
	id: string;
}
const ProjectsList: FC<Props> = ({ id }) => {
	return (
		<section id={id} className={styles.root}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Featured Projects</h1>
			</div>
			<div className={styles.projectsContainer} key="projectContainer">
				{projects.map((project, idx) => {
					return (
						<Project
							{...project}
							annotateRight={idx % 2 === 0}
							preview={project.preview ?? portfolio}
							key={project.title}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectsList;
