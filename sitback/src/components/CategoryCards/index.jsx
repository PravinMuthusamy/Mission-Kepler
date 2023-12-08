import React from 'react';
import styles from'./CategoryCards.module.css'
import { Link } from 'react-router-dom';
import Image from '../Image';
import * as constants from '../../constants/AppConstants'

const CategoryCard = ({ category }) => {
  return (
    <li key={category.id} className={styles.categoryCard}>
      <Image imgSrc={category.photo} imgAlt={category.name} className={styles.categoryImage} />
      <h3 className={styles.categoryTitle}>{category.category}</h3>
      <p className={styles.categoryDescription}>{category.description}</p>
      <Link to={`/categories/${category.id}`} className={styles.shopNowButton}>
        {constants.SHOP_NOW}
      </Link>
    </li>
  );
};

export default CategoryCard;
