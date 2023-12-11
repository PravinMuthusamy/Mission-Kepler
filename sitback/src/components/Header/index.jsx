import React, { useEffect, useState } from 'react';
import styles from './Header.module.css'; 
import { FaSortDown } from 'react-icons/fa';
import * as constants from '../../constants/AppConstants';

const Header = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const storedCategory = localStorage.getItem('activeCategory');
    if (storedCategory) {
      setActiveCategory(storedCategory);
    }
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    localStorage.setItem('activeCategory', category);
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <a href={`/`} className={styles.sitback}>
          {constants.SITBACK}
        </a>
      </div>
      <nav className={styles.navBar}>
        {categories.map((item) => (
          <a
            key={item.category}
            href={`/categories/${item.category.toLowerCase()}`}
            onClick={() => handleCategoryClick(item.category)}
            className={activeCategory === item.category ? styles.activeCategory : styles.normalCategory}
          >
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
