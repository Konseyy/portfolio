import React, { FC } from 'react';
import github from '../public/static/img/github.png';
import linkedin from '../public/static/img/linkedin.png';
import ImageLink from '../components/ImageLink';
import styles from './AboutMe.module.css';
interface Props {
	id: string;
}
const AboutMe: FC<Props> = ({ id }) => {
	return (
		<div id={id} className={styles.aboutMe}>
			<div className={styles.title}>My name is valdis</div>
			<div className={styles.description}>description</div>
			<div className={styles.socialsContainer}>
				<ImageLink
					image={github}
					title="GitHub"
					url="https://github.com/Konseyy"
				/>
				<ImageLink
					image={linkedin}
					title="LinkedIn"
					url="https://www.linkedin.com/in/valdis-g-bukalders-a0b9a2168/"
				/>
			</div>
		</div>
	);
};

export default AboutMe;
