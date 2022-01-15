import React, { FC } from 'react';
import ImageLink, { ImageLinkProps } from '../components/ImageLink';
import styles from './AboutMe.module.css';
interface Props {
	id: string;
	title: string;
	description: string;
	socials: ImageLinkProps[];
}
const AboutMe: FC<Props> = ({ id, title, description, socials }) => {
	return (
		<div id={id} className={styles.aboutMe}>
			<div className={styles.title}>My name is valdis</div>
			<div className={styles.description}>description</div>
			<div className={styles.socialsContainer} key="socialsContainer">
				{socials.map((social) => {
					return <ImageLink {...social} key={social.title} />;
				})}
			</div>
		</div>
	);
};

export default AboutMe;
