import React from 'react';
import { formatPrice } from '../../utils/formatPrice.utils';
import styles from './WishListContainer.module.css';
import * as constants from '../../constants/AppConstants'

const WishListContainer = ({ wishlist,onAddToCart }) => {

  const handleAddToCart = (item) => {
    onAddToCart(item);
  };

  return (
    <div className={styles.wishlistContainer}>
      {wishlist.length === 0 && (
          <div className={styles.emptyWishlistMessage}>{constants.EMPTY_WISHLIST_MSG}</div>
        )}
      <div className={styles.individualWishlist}>
      <ul >
        {wishlist.map((item) => (
          <li key={item.id} className={styles.wishList}>
            <div className={styles.leftWishlistSection}>
              <img src={item.photo} alt={item.name} />
            </div>
            <div className={styles.rightWishlistSection}>
              <div>{item.name}</div>
              <div>{constants.RUPEE} {formatPrice(item.price)}</div>
            <div >
            <button className={styles.addToCartButton} onClick={() => handleAddToCart(item)}>{constants.ADD_TO_CART}</button>
            </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default WishListContainer;
