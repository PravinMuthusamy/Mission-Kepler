import React from 'react';
import styles from './OrderCards.module.css'
import { formatPrice } from '../../utils/formatPrice.utils';
import Image from '../Image';
import * as constants from '../../constants/AppConstants'

const OrderCard = ({ product }) => {
  return (
    <li key={product.id} className={styles.orderShoppingCard}>
      <Image imgSrc={product.photo} imgAlt={product.name} className={styles.productOrderImage} />
      <div className={styles.productOrderDetails}>
        <div className={styles.orderNamePrice}>
          <p className={styles.productOrderName}>{product.name}</p>
          <p className={styles.productOrderPrice}>{constants.RUPEE} {formatPrice(product.price)}</p>
        </div>
        <p className={styles.productOrderQuantity}>{constants.QUANTITY} {product.quantity}</p>
        <p className={styles.productOrderDescription}>{product.description}</p>
      </div>
    </li>
  );
};

export default OrderCard;
