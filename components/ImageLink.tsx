import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { openInNewTab } from '../functions/openInNewTab';
import styles from './ImageLink.module.css';
export interface ImageLinkProps {
	image: StaticImageData;
	title: string;
	url: string;
	colored?: boolean;
	size?: number;
	labelBackground?: boolean;
}
const ImageLink: FC<ImageLinkProps> = ({
	image,
	title,
	url,
	colored = false,
	size = 75,
	labelBackground = false,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showLabel, setShowLabel] = useState(false);

	useEffect(() => {
		if (isHovered) {
			//delay before label appears
			setTimeout(() => {
				setIsHovered((old) => {
					if (old) {
						setShowLabel(true);
					}
					return old;
				});
			}, 250);
		} else {
			setShowLabel(false);
		}
	}, [isHovered]);
	return (
		<div
			className={styles.root}
			style={{
				height: size,
				width: size,
				// paddingBottom: size * 0.7,
			}}
		>
			<div
				className={`${styles.imageContainer} ${isHovered ? styles.hover : ''}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => openInNewTab(url)}
			>
				<div
					className={`${
						colored ? styles.imageColored : styles.imageBlackAndWhite
					} ${styles.image}`}
				>
					<Image src={image} />
				</div>
			</div>
			<div className={styles.labelContainer}>
				<label
					className={`${styles.label} ${showLabel ? styles.show : ''} ${
						labelBackground ? styles.black : ''
					}`}
					style={{ fontSize: size * 0.35 }}
				>
					{title}
				</label>
			</div>
		</div>
	);
};

export default ImageLink;
