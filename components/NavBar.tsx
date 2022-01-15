import React, { FC } from 'react';
import scrollIdIntoView from '../functions/scrollIdIntoView';
import styles from './NavBar.module.css';
type NavItem = {
	displayTitle: string;
	elemId: string;
};
interface Props {
	navItems: NavItem[];
}
const NavBar: FC<Props> = ({ navItems }) => {
	return (
		<nav className={styles.root}>
			<ul className={styles.list} key="navBarContainer">
				{navItems.map((n) => {
					return (
						<li onClick={() => scrollIdIntoView(n.elemId)} key={n.displayTitle}>
							{n.displayTitle}
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default NavBar;
