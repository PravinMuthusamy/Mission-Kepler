import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'; 
import { FaSortDown } from 'react-icons/fa';
import * as constants from '../../constants/AppConstants';

const Header = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const categoryFromPath = currentPath.replace('/categories/', '').toLowerCase();
    setActiveCategory(categoryFromPath);
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category.toLowerCase());
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a href={`/`} className={styles.sitback}>
          {constants.SITBACK}
        </a>
      </div>
      <nav className={styles.navBar}>
        {categories.map((item) => {
          const categoryClassName = activeCategory === item.category.toLowerCase() ? styles.activeCategory : styles.normalCategory;

          return (
            <a
              key={item.category}
              href={`/categories/${item.category.toLowerCase()}`}
              onClick={() => handleCategoryClick(item.category)}
              className={categoryClassName}
            >
              {item.category.toUpperCase()}
            </a>
          );
        })}
      </nav>
      <p className={styles.user}>
        {constants.USER} <FaSortDown className={styles.downIcon} />
      </p>
    </header>
  );
};

export default Header;
