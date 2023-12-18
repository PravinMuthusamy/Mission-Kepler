import React, { useState } from 'react';
import CartContainer from '../../container/CartContainer';
import WishListContainer from '../../container/WishListContainer';
import styles from './ShoppingContainer.module.css';
import * as constants from '../../constants/AppConstants'

const ShoppingContainer = ({ cart, wishlist, onIncrement, onDecrement, onAddToCart }) => {
  const initialContainer = wishlist.length > 0 ? 'wishlist' : 'cart';
  const [activeContainer, setActiveContainer] = useState(initialContainer);

  const handleToggleContainer = (container) => {
    setActiveContainer(container);
  };

  return (
    <div className={styles.shoppingCartContainer}>
      <div className={styles.shoppingCartContent}>
        <div className={styles.toggleContainers}>
          <h4
            className={activeContainer === 'cart' ? styles.active : ''}
            onClick={() => handleToggleContainer('cart')}
          >
            {constants.MY_CART}
          </h4>
          <h4
            className={activeContainer === 'wishlist' ? styles.active : ''}
            onClick={() => handleToggleContainer('wishlist')}
          >
            {constants.MY_WISHLIST}
          </h4>
        </div>
        {activeContainer === 'cart' && <CartContainer cart={cart} onIncrement={onIncrement} onDecrement={onDecrement} />}
        {activeContainer === 'wishlist' && <WishListContainer wishlist={wishlist} onAddToCart={onAddToCart}/>}
      </div>
    </div>
  );
};

export default ShoppingContainer;
