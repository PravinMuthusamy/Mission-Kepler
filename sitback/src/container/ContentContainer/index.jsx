import React from 'react';
import CategoryCard from '../../components/CategoryCards';
import styles from './ContentContainer.module.css'
import * as constants from '../../constants/AppConstants'


const ContentContainer = ({ categories }) => {
  return (
    <div className={styles.captionContainer}>
      <p className={styles.captionA}>{constants.ADVERTISEMENT_HEADING}</p>
      <p className={styles.captionB}>{constants.ADVERTISEMENT_SUB_HEADING}</p>
      <ul className={styles.categoryList}>
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default ContentContainer;
