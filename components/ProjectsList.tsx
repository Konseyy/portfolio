import React, { FC } from 'react';
import Project, { ProjectProps } from './Project';
import styles from './ProjectsList.module.scss';
interface Props {
	projects: ProjectProps[];
	id: string;
}
const ProjectsList: FC<Props> = ({ projects, id }) => {
	return (
		<section id={id} className={styles.root}>
			<div className={styles.titleContainer}>
				<h1 className={styles.title}>Featured Projects</h1>
			</div>
			<div className={styles.projectsContainer} key="projectContainer">
				{projects.map((project) => {
					return <Project {...project} key={project.title} />;
				})}
			</div>
		</section>
	);
};

export default ProjectsList;
