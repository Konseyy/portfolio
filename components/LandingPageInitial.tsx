import React, { FC, useEffect, useState } from 'react';
import styles from './LandingPageInitial.module.css';
import SectionButton from './SectionButton';
interface Props {
	scrollToId: string;
	id: string;
}
const LandingPageInitial: FC<Props> = ({ scrollToId, id }) => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth < 500) setIsMobile(true);
		const listen = window.addEventListener('resize', (e) => {
			if (window.innerWidth < 500) setIsMobile(true);
			else setIsMobile(false);
		});
		return listen;
	}, []);
	return (
		<div id={id} className={styles.landingPage}>
			<div className={styles.landingPageIntro}>
				<p>{isMobile ? 'Hi' : 'Hello'}</p>
				<p className={styles.notBold}>,</p>
				{/* <span id={styles.firstP}>.</span>
				<span id={styles.secondP}>.</span>
				<span id={styles.thirdP}>.</span> */}
				<span id={styles.spacer}></span>
			</div>
			<SectionButton title="About Me" scrollToId={scrollToId} />
		</div>
	);
};

export default LandingPageInitial;
