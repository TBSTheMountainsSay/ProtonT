import React from 'react';
import styles from './Contact.module.scss';
import Title from '../Title/Title';
import SvgSelector from '../SvgSelector/SvgSelector';

const Contact = ({ id, text, mainText }) => {
  return (
    <div className={styles.contact}>
      <div className={styles.wrapperSvg}>
        <SvgSelector id={id} className={styles.svg} />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={styles.mainText}>{mainText}</div>
      </div>
    </div>
  );
};

export default Contact;
