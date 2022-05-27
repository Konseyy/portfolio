import React, { FC } from 'react';
import ImageLink, { ImageLinkProps } from '@/components/image_link/ImageLink';
import Image from 'next/image';
import me from '@/img/me.jpg';
import styles from './AboutMe.module.scss';
import SectionButton from '../SectionButton';
import socials from "./SocialsData"
import aboutMeContent from "./AboutMeContent"
interface Props {
	id: string;
	title: JSX.Element;
	scrollToId: string;
}
const AboutMe: FC<Props> = ({
	id,
	title,
	scrollToId,
}) => {
	return (
		<section id={id} className={styles.root}>
			<div className={styles.aboutMe}>
				<div className={styles.personalPhotoContainer}>
					<Image src={me} alt="photo of me" />
				</div>
				<div className={styles.infoContainer}>
					<div className={styles.title}>{title}</div>
					<div
						className={styles.descriptionContainer}
						key="descriptionContainer"
					>
						{aboutMeContent.map((el, x) => {
							return {
								...el,
								props: { ...el.props, className: styles.description },
								key: `paragraph${x}`,
							};
						})}
					</div>
					<div className={styles.socialsContainer} key="socialsContainer">
						{socials.map((social) => {
							return <ImageLink {...social} key={social.title} />;
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
