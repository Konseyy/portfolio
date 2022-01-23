import React, { FC } from 'react';
import dropdown from '../public/static/img/dropdown.png';
import Image from 'next/image';
import styles from './SectionButton.module.scss';
import scrollIdIntoView from '../functions/scrollIdIntoView';
interface Props {
	scrollToId: string;
	title: string;
}
const SectionButton: FC<Props> = ({ scrollToId, title }) => {
	return (
		<div className={styles.root}>
			<div
				tabIndex={0}
				className={styles.button}
				onClick={(e) => {
					(document.activeElement as HTMLElement).blur();
					scrollIdIntoView(scrollToId);
				}}
			>
				<p>{title}</p>
				<div className={styles.dropdownContainer}>
					<Image src={dropdown} alt="direction indicator" />
				</div>
			</div>
		</div>
	);
};

export default SectionButton;
