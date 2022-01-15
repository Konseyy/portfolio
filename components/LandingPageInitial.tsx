import React, { FC } from 'react';
import styles from './LandingPageInitial.module.css';
import SectionButton from './SectionButton';
interface Props {
	scrollToId: string;
	id: string;
}
const LandingPageInitial: FC<Props> = ({ scrollToId, id }) => {
	return (
		<div id={id} className={styles.landingPage}>
			<div className={styles.landingPageIntro}>
				<p>Hi</p>
				<span id={styles.firstP}>.</span>
				<span id={styles.secondP}>.</span>
				<span id={styles.thirdP}>.</span>
			</div>
			<SectionButton title="About Me" scrollToId={scrollToId} />
		</div>
	);
};

export default LandingPageInitial;
