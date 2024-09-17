import React from 'react';
import styles from './Header.module.scss';

const Header = ({}) => {
  return (
    <div className={styles.header}>
      <div className={styles.background}></div>
      <div className={styles.title}>Протон-Т</div>
    </div>
  );
};

export default Header;
