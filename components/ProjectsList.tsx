import React, { FC } from 'react';
import Project, { ProjectProps } from './Project';
import styles from './ProjectsList.module.css';
interface Props {
	projects: ProjectProps[];
}
const ProjectsList: FC<Props> = ({ projects }) => {
	return (
		<div className={styles.projectsContainer} key="projectContainer">
			{projects.map((project) => {
				return <Project {...project} key={project.title} />;
			})}
		</div>
	);
};

export default ProjectsList;
