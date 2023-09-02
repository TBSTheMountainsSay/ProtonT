import React from 'react';
import styles from './CustomImage.module.scss';

const CustomImage = ({ src, description }) => {
  return (
    <div className={styles.wrapper}>
      <img src={src} className={styles.img} />
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default CustomImage;
