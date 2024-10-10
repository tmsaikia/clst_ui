import React from 'react';
import styles from './Footer.module.css';
import clst_logo from '/home/training/CLST/react_app/clst/src/global/images/clst.svg'; // Ensure this path is correct

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <img src={clst_logo} alt="CLST IITG Logo" className={styles.logo} />
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} IITG CLST
        </p>
      </div>
    </footer>
  );
};

export default Footer;
