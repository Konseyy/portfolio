import React, { FC, useEffect, useState } from 'react';
import styles from './LandingPageInitial.module.scss';
import SectionButton from './SectionButton';
interface Props {
	scrollToId: string;
	id: string;
}
const LandingPageInitial: FC<Props> = ({ scrollToId, id }) => {
	return (
		<div id={id} className={styles.landingPage}>
			<div className={styles.landingPageIntro}>
				<p className={styles.hideMobile}>Hello</p>
				<p className={styles.showMobile}>Hi</p>
				<p className={styles.notBold}>,</p>
				<span id={styles.spacer}></span>
			</div>
			<SectionButton title="About Me" scrollToId={scrollToId} />
		</div>
	);
};

export default LandingPageInitial;
