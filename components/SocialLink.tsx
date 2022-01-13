import React, { FC } from 'react';
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
   return (
      <div className={styles.imageContainer}>
         <a id="test" href={url}>
            <Image src={image} className={styles.image} />
         </a>
      </div>
   );
};

export default SocialLink;
