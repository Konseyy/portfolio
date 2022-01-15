import React, { FC } from 'react';
import Image from 'next/image';
import dropdown from '../public/static/img/dropdown.png';
import styles from './LandingPageInitial.module.css';
interface Props {
	scrollToId: string;
}
const LandingPageInitial: FC<Props> = ({ scrollToId }) => {
	return (
		<div className={styles.landingPage}>
			<div className={styles.landingPageIntro}>
				<p>Hi</p>
				<span id={styles.firstP}>.</span>
				<span id={styles.secondP}>.</span>
				<span id={styles.thirdP}>.</span>
			</div>
			<div
				className={styles.scrollToAboutMe}
				onClick={() => document.getElementById(scrollToId).scrollIntoView()}
			>
				<p>About Me</p>
				<div className={styles.dropdownContainer}>
					<Image src={dropdown} />
				</div>
			</div>
		</div>
	);
};

export default LandingPageInitial;
