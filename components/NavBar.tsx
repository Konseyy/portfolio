import React, { FC, useEffect, useState } from 'react';
import scrollIdIntoView from '../functions/scrollIdIntoView';
import { openInBrowser } from '../functions/openInBrowser';
import dropdown from '../public/static/img/dropdown.png';
import line from '../public/static/img/line.png';
import styles from './NavBar.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
type NonEmptyArray<T> = [T, ...T[]];
type NavItem = {
	displayTitle: string;
	pagePath: string;
	sections: NonEmptyArray<NavSection>;
};
type NavSection = {
	sectionTitle: string;
	sectionId?: string;
	onClick?: () => void;
};
interface Props {
	navItems: NonEmptyArray<NavItem>;
}
const NavBar: FC<Props> = ({ navItems }) => {
	const router = useRouter();
	const [mobileExpanded, setMobileExpanded] = useState(false);
	const [activeElement, setActiveElement] = useState(-1);
	useEffect(() => {
		const rootHtml = document.getElementsByTagName('html')[0];
		if (mobileExpanded) {
			window.onclick = () => {
				// setMobileExpanded(false);
			};
			rootHtml.setAttribute('class', 'noScrollBar navLocked');
		} else {
			window.onclick = () => {};
			rootHtml.setAttribute('class', 'noScrollBar');
		}
	}, [mobileExpanded]);
	return (
		<nav className={`${styles.root}  ${mobileExpanded ? styles.expanded : ''}`}>
			<ul className={styles.list} key="navBarContainer">
				<li className={styles.navListContainer}>
					<ul className={styles.navList}>
						{navItems.map((navItem, idx) => {
							return (
								<li
									tabIndex={0}
									key={`navItem${navItem.displayTitle}`}
									className={`${styles.navItem} ${
										router.pathname === navItem.pagePath ? styles.active : ''
									}`}
									onClick={(e) => {
										e.stopPropagation();
										if (idx === activeElement) {
											setActiveElement(-1);
											const target = document.activeElement as HTMLElement;
											target.blur();
										} else {
											setActiveElement(idx);
										}
									}}
								>
									<div className={styles.sectionHeader}>
										<h1>{navItem.displayTitle}</h1>
										<div className={styles.dropdownContainer}>
											<Image src={dropdown} alt="direction indicator" />
										</div>
									</div>
									<div className={styles.sectionListContainer}>
										<ul
											className={styles.sectionList}
											key={`navsection${navItem.displayTitle}`}
										>
											{navItem.sections.map((section) => {
												return (
													<li
														tabIndex={0}
														key={`navItem${section.sectionTitle}`}
														className={styles.sectionListItem}
														onClick={() => {
															setMobileExpanded(false);
															(document.activeElement as HTMLElement).blur();
															if (section.onClick) {
																section.onClick();
																return;
															}
															if (router.pathname !== navItem.pagePath) {
																router.push({
																	pathname: navItem.pagePath,
																	query: section.sectionId
																		? {
																				scroll: section.sectionId,
																		  }
																		: {},
																});
															} else {
																section.sectionId &&
																	scrollIdIntoView(section.sectionId);
															}
														}}
													>
														{section.sectionTitle}
													</li>
												);
											})}
										</ul>
									</div>
								</li>
							);
						})}
					</ul>
				</li>

				<li className={`${styles.mobileExpandContainer} ${styles.navItem}`}>
					<div
						onClick={() => setMobileExpanded((old) => !old)}
						className={`${styles.mobileExpand} ${
							mobileExpanded ? styles.expanded : ''
						}`}
					>
						<div className={styles.burgerLine}>
							<Image src={line} alt="mobile expand line" />
						</div>
						<div className={styles.burgerLine}>
							<Image src={line} alt="mobile expand line" />
						</div>
						<div className={styles.burgerLine}>
							<Image src={line} alt="mobile expand line" />
						</div>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
