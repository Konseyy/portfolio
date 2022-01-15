import React, { FC } from 'react';
import Project, { ProjectProps } from './Project';
import styles from './ProjectsList.module.css';
interface Props {
	projects: ProjectProps[];
}
const ProjectsList: FC<Props> = ({ projects }) => {
	return (
		<div className={styles.root}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Featured Projects</h1>
			</div>
			<div className={styles.projectsContainer} key="projectContainer">
				{projects.map((project) => {
					return <Project {...project} key={project.title} />;
				})}
			</div>
		</div>
	);
};

export default ProjectsList;
