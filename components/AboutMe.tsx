import React, { FC } from 'react';
import ImageLink, { ImageLinkProps } from '../components/ImageLink';
import Image from 'next/image';
import me from '../public/static/img/me.jpg';
import styles from './AboutMe.module.scss';
import SectionButton from './SectionButton';
interface Props {
	id: string;
	title: JSX.Element;
	description: JSX.Element[];
	socials: ImageLinkProps[];
	scrollToId: string;
}
const AboutMe: FC<Props> = ({
	id,
	title,
	description,
	socials,
	scrollToId,
}) => {
	return (
		<section id={id} className={styles.root}>
			<div className={styles.aboutMe}>
				<div className={styles.personalPhotoContainer}>
					<Image src={me} />
				</div>
				<div className={styles.infoContainer}>
					<h1 className={styles.title}>{title}</h1>
					<div
						className={styles.descriptionContainer}
						key="descriptionContainer"
					>
						{description.map((el, x) => {
							return {
								...el,
								props: { ...el.props, className: styles.description },
								key: `paragraph${x}`,
							};
						})}
					</div>
					<div className={styles.socialsContainer} key="socialsContainer">
						{socials.map((social) => {
							return <ImageLink {...social} key={social.title} size={90} />;
						})}
					</div>
				</div>
			</div>
			<SectionButton title="Projects" scrollToId={scrollToId} />
		</section>
	);
};

export default AboutMe;
