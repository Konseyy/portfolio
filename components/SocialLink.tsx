import React, { FC, useState } from 'react';
import Image from 'next/image';
import styles from './SocialLink.module.css';
interface Props {
   image: StaticImageData;
   title: string;
   backgroundColor: string;
   foregroundColor: string;
   url: string;
}
const SocialLink: FC<Props> = ({ image, title, backgroundColor, foregroundColor, url }) => {
	const [isHovered,setIsHovered] = useState(false);
	const openInNewTab = (url:string) => {
		window.open(url, '_blank').focus();
	  }
   return (
      <div className={`${styles.imageContainer} ${isHovered?styles.hover:""}`} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={()=>openInNewTab(url)}>
         <Image src={image} className={styles.image} />
      </div>
   );
};

export default SocialLink;
