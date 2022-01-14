import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TechnologyLink.module.css';
interface Props {
   image: StaticImageData;
   title: string;
   url: string;
}
const TechnologyLink: FC<Props> = ({ image, title, url }) => {
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
         }, 300);
      } else {
         setShowLabel(false);
      }
   }, [isHovered]);
   return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <div
            className={`${styles.imageContainer} ${isHovered ? styles.hover : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => openInNewTab(url)}
         >
            <div className={styles.image}>
               <Image src={image} />
            </div>
         </div>
         <div className={`${styles.label} ${showLabel ? styles.show : ''}`} style={{ display: 'flex', justifyContent: 'center' }}>
            {title}
         </div>
      </div>
   );
};

export default TechnologyLink;
