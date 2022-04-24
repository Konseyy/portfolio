import React, {
	Dispatch,
	FC,
	useEffect,
	useState,
} from 'react';
import styles from './LandingPageInitial.module.scss';
import SectionButton from '../SectionButton';
interface Props {
	scrollToId: string;
	id: string;
}
const LandingPageInitial: FC<Props> = ({ scrollToId, id }) => {
	const desktopText = 'Hello, ';
	const mobileText = 'Hi, ';
	let timerDesktop: NodeJS.Timer;
	let timerMobile: NodeJS.Timer;
	type typing = {
		partialText: string;
		direction: 'backwards' | 'forwards';
		overflow: number;
		typeOverflow: number;
	};
	const [desktopTextPartial, setDesktopTextPartial] = useState<typing>({
		partialText: desktopText,
		direction: 'backwards',
		overflow: 0,
		typeOverflow: 0,
	});
	const [mobileTextPartial, setMobileTextPartial] = useState<typing>({
		partialText: mobileText,
		direction: 'backwards',
		overflow: 0,
		typeOverflow: 0,
	});
	const typeText = (
		fullText: string,
		setPartialText: Dispatch<React.SetStateAction<typing>>,
		typeSpeed: number,
		pauseMultiplier: number
	) => {
		const timer = setInterval(() => {
			setPartialText((oldPartial) => {
				const json = JSON.stringify(oldPartial);
				let newPartial = JSON.parse(json);
				if (oldPartial.direction === 'backwards') {
					newPartial.partialText = newPartial.partialText.slice(0, -1);
				}
				if (oldPartial.direction === 'forwards') {
					if (newPartial.typeOverflow === 3) {
						newPartial.partialText = fullText.slice(
							0,
							oldPartial.partialText.length + 1
						);
						newPartial.typeOverflow = 0;
					} else {
						newPartial.typeOverflow += 1;
					}
				}
				if (oldPartial.partialText.length === fullText.length) {
					if (newPartial.overflow === pauseMultiplier) {
						newPartial.direction = 'backwards';
						newPartial.overflow = 0;
					} else {
						newPartial.overflow += 1;
					}
				}
				if (oldPartial.partialText.length === 0) {
					if (newPartial.overflow === Math.floor((pauseMultiplier / 3) * 2)) {
						newPartial.direction = 'forwards';
						newPartial.overflow = 0;
					} else {
						newPartial.overflow += 1;
					}
				}

				return newPartial;
			});
		}, typeSpeed);
		return timer;
	};
	useEffect(() => {
		setTimeout(() => {
			timerDesktop = typeText(desktopText, setDesktopTextPartial, 100, 45);
			timerMobile = typeText(mobileText, setMobileTextPartial, 90, 50);
		}, 3000);
		return () => {
			clearInterval(timerDesktop);
			clearInterval(timerMobile);
		};
	}, []);
	return (
		<section id={id} className={styles.landingPage}>
			<div className={styles.landingPageIntro}>
				<p className={`${styles.hideMobile} ${styles.movingText}`}>
					{desktopTextPartial.partialText}
				</p>
				<p className={`${styles.showMobile} ${styles.movingText}`}>
					{mobileTextPartial.partialText}
				</p>
				<span
					id={styles.spacer}
					className={`${
						(desktopTextPartial.partialText.length === desktopText.length ||
							desktopTextPartial.partialText.length === 0) &&
						styles.animate
					} ${styles.hideMobile}`}
				></span>
				<span
					id={styles.spacer}
					className={`${
						(mobileTextPartial.partialText.length === mobileText.length ||
							mobileTextPartial.partialText.length === 0) &&
						styles.animate
					} ${styles.showMobile}`}
				></span>
			</div>
			<SectionButton title="About Me" scrollToId={scrollToId} />
		</section>
	);
};

export default LandingPageInitial;
