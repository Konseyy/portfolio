import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import SectionButton from './SectionButton';
import styles from './Skills.module.scss';
import dropdown from '../public/static/img/dropdown.png';
export type skill = {
	image: StaticImageData;
	name: string;
	description: JSX.Element[];
	url: string;
};
interface Props {
	id: string;
	scrollToId: string;
	skills: skill[];
	displayElements?: number;
}
const Skills: FC<Props> = ({ id, scrollToId, skills, displayElements = 5 }) => {
	type scrollState = {
		startIndex: number;
		endIndex: number;
		lastScroll: 'down' | 'up';
	};
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollState, setScrollState] = useState<scrollState>({
		startIndex: 0,
		endIndex: displayElements - 1,
		lastScroll: 'down',
	});
	const [slicedSkills, setSlicedSkills] = useState(
		skills.slice(0, displayElements - 1)
	);
	const [startY, setStartY] = useState(0);
	useEffect(() => {
		document.getElementsByTagName('html')[0].classList.add('noScroll');
		window.ontouchend = (e) => {
			unLockScroll();
		};
		window.ontouchstart = (e) => {
			unLockScroll();
		};
	}, []);
	useEffect(() => {
		setSlicedSkills(
			skills.slice(scrollState.startIndex, scrollState.endIndex + 1)
		);
		if (scrollState.lastScroll === 'up') {
			if (selectedIndex < slicedSkills.length - 1) {
				setSelectedIndex((old) => old + 1);
			}
		}
		if (scrollState.lastScroll === 'down') {
			if (selectedIndex > 0) {
				setSelectedIndex((old) => old - 1);
			}
		}
	}, [scrollState]);
	const handleScrollUp = () => {
		if (scrollState.startIndex > 0) {
			setScrollState({
				startIndex: scrollState.startIndex - 1,
				endIndex: scrollState.endIndex - 1,
				lastScroll: 'up',
			});
		}
	};
	const handleScrollDown = () => {
		if (scrollState.endIndex < skills.length - 1) {
			setScrollState({
				startIndex: scrollState.startIndex + 1,
				endIndex: scrollState.endIndex + 1,
				lastScroll: 'down',
			});
		}
	};
	const lockScroll = () => {
		const rootHtml = document.getElementsByTagName('html')[0];
		rootHtml.classList.add('locked');
	};
	const unLockScroll = () => {
		const rootHtml = document.getElementsByTagName('html')[0];
		rootHtml.classList.remove('locked');
	};
	return (
		<section className={styles.root} id={id}>
			<div className={styles.skillWindow}>
				<ul className={styles.selector}>
					<li
						tabIndex={scrollState.startIndex === 0 ? -1 : 0}
						className={`${styles.scrollContainer} ${
							scrollState.startIndex === 0 ? styles.inactive : ''
						}`}
						onClick={handleScrollUp}
					>
						<div className={styles.scroll}>
							<Image src={dropdown} />
						</div>
					</li>
					{slicedSkills.map((skill, idx) => {
						return (
							<li
								tabIndex={0}
								className={`${styles.selectorItemContainer} ${
									idx === selectedIndex ? styles.active : ''
								} ${idx === 0 ? styles.first : ''} ${
									idx === slicedSkills.length - 1 ? styles.last : ''
								}`}
								onClick={() => setSelectedIndex(idx)}
								key={skill.name}
								onWheel={(e) => {
									if (e.deltaY > 0) {
										handleScrollDown();
									} else {
										handleScrollUp();
									}
									return false;
								}}
								onMouseEnter={() => {
									lockScroll();
								}}
								onMouseLeave={() => {
									unLockScroll();
								}}
								onTouchStart={(e) => {
									e.stopPropagation();
									setStartY(e.touches[0].screenY);
									lockScroll();
								}}
								onTouchEnd={() => {
									unLockScroll();
								}}
								onTouchCancel={() => {
									unLockScroll();
								}}
								onTouchMove={(e) => {
									e.stopPropagation();
									if (Math.abs(e.touches[0].screenY - startY) < 50) return;
									setStartY(e.touches[0].screenY);
									if (e.touches[0].screenY > startY) {
										handleScrollUp();
									} else {
										handleScrollDown();
									}
								}}
							>
								<div className={styles.selectorItem}>
									<Image src={skill.image} />
								</div>
							</li>
						);
					})}
					<li
						tabIndex={scrollState.endIndex >= skills.length - 1 ? -1 : 0}
						className={`${styles.scrollContainer} ${
							scrollState.endIndex >= skills.length - 1 ? styles.inactive : ''
						}`}
						onClick={handleScrollDown}
					>
						<div className={styles.scroll}>
							<Image src={dropdown} priority={true} />
						</div>
					</li>
				</ul>
				<div className={styles.contentSection}>
					<div className={styles.titleContainer}>
						<a href={slicedSkills[selectedIndex].url} className={styles.title}>
							{slicedSkills[selectedIndex].name}
						</a>
					</div>
					<div className={styles.description}>
						{slicedSkills[selectedIndex].description.map((p) => {
							return {
								...p,
								props: { ...p.props, className: styles.paragraph },
								key: `paragraph${p.props.children}`,
							};
						})}
					</div>
				</div>
			</div>
			<SectionButton title="Projects" scrollToId={scrollToId} />
		</section>
	);
};

export default Skills;
