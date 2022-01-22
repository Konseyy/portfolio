import React, { FC } from 'react';
import scrollIdIntoView from '../functions/scrollIdIntoView';
import { openInBrowser } from '../functions/openInBrowser';
import dropdown from '../public/static/img/dropdown.png';
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
	return (
		<nav className={styles.root}>
			<ul className={styles.list} key="navBarContainer">
				{navItems.map((navItem) => {
					return (
						<li
							key={`navItem${navItem.displayTitle}`}
							className={`${styles.navItem} ${
								router.pathname === navItem.pagePath ? styles.active : ''
							}`}
						>
							<div className={styles.sectionHeader}>
								<h1>{navItem.displayTitle}</h1>
								<div className={styles.dropdownContainer}>
									<Image src={dropdown} />
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
		</nav>
	);
};

export default NavBar;
