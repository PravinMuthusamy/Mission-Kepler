import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice.utils";
import styles from './CartContainer.module.css'
import Image from "../../components/Image";
import * as constants from '../../constants/AppConstants'


const CartContainer = ({ cart, onIncrement, onDecrement }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.quantity * item.price),
    0
  );

  return (
    <div className={styles.cartMainContainer}>
      {cart.length === 0 && (
          <div className={styles.emptyCartMessage}>{constants.EMPTY_CART_MSG}</div>
        )}
      <div className={styles.individualCart}>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className={styles.cartList}>
              <div className={styles.leftCartSection}>
                <Image imgSrc={item.photo} imgAlt={item.name} />
              </div>
              <div className={styles.rightCartSection}>
                <div>{item.name}</div>
                <div>{constants.RUPEE} {formatPrice(item.price)}</div>
              </div>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityDecrement}
                  onClick={() => onDecrement(item)}
                >
                  -
                </button>
                <div>{item.quantity}</div>
                <button
                  className={styles.quantityIncrement}
                  onClick={() => onIncrement(item)}
                >
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.orderContainer}>
        <div className={styles.totalPrice}>
          <div>{constants.TOTAL_AMOUNT}</div>
          <div>{constants.RUPEE} {formatPrice(totalPrice)}</div>
        </div>
        {cart.length > 0 && (
          <div className={styles.placeOrder}>
            <Link
              to={{
                pathname: "/confirmOrder",
              }}
              state={{ cart: cart }}
            >
              <button>{constants.PLACE_ORDER}</button>
            </Link>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default CartContainer;
