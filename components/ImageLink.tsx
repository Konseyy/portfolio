import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { openInBrowser } from '../helpers/openInBrowser';
import styles from './ImageLink.module.scss';
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
		<a
			rel="noreferrer"
			tabIndex={-1}
			href={url}
			onClick={(e) => e.preventDefault()}
			className={styles.root}
			style={{
				height: size,
				width: size,
				// paddingBottom: size * 0.7,
			}}
		>
			<div
				tabIndex={0}
				className={`${styles.imageContainer} ${isHovered ? styles.hover : ''}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => openInBrowser(url)}
			>
				<div
					className={`${
						colored ? styles.imageColored : styles.imageBlackAndWhite
					} ${styles.image}`}
				>
					<Image src={image} alt={title} />
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
		</a>
	);
};

export default ImageLink;
