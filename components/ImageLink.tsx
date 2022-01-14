import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ImageLink.module.css';
export interface ImageLinkProps {
	image: StaticImageData;
	title: string;
	url: string;
	colored?: boolean;
	size?: number;
}
const ImageLink: FC<ImageLinkProps> = ({
	image,
	title,
	url,
	colored = false,
	size = 75,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [showLabel, setShowLabel] = useState(false);
	const openInNewTab = (url: string) => {
		window.open(url, '_blank').focus();
	};
	useEffect(() => {
		if (isHovered) {
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
				paddingBottom: size * 0.5,
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
				<div
					className={`${styles.label} ${showLabel ? styles.show : ''}`}
					style={{ fontSize: size * 0.35 }}
				>
					{title}
				</div>
			</div>
		</div>
	);
};

export default ImageLink;
