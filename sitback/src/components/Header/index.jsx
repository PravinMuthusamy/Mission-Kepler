import React from 'react';
import styles from './Header.module.css'; 
import { FaSortDown } from 'react-icons/fa';
import * as constants from '../../constants/AppConstants'

const Header = ({categories}) => {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a href={`/`} className={styles.sitback}>{constants.SITBACK}</a>
      </div>
      <nav className={styles.navBar}>
        {categories.map((item) => (
          <a key={item.category} href={`/categories/${item.category.toLowerCase()}`}>
            {item.category.toUpperCase()}
          </a>
        ))}
      </nav>
        <p className={styles.user}>
          {constants.USER} <FaSortDown className={styles.downIcon} />
        </p>
    </header>
  );
};

export default Header;
