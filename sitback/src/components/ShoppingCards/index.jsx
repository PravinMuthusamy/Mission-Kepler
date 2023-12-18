import React from "react";
import styles from "./ShoppingCards.module.css";
import { formatPrice } from "../../utils/formatPrice.utils";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import Image from "../Image";
import * as constants from "../../constants/AppConstants";

const ShoppingCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const renderGuaranteeText = () => {
    if (product.guarantee > 1) {
      return `${product.guarantee} YEARS GUARANTEE`;
    } else if (product.guarantee === 1) {
      return "1 YEAR GUARANTEE";
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const handleAddToWishlist = () => {
    onAddToWishlist(product);
  };

  return (
    <>
      <li key={product.id} className={styles.shoppingCard}>
        <Image
          imgSrc={product.photo}
          imgAlt={product.name}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <div className={styles.namePrice}>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.productPrice}>
              {constants.RUPEE} {formatPrice(product.price)}
            </p>
          </div>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.guaranteeText}>
            <IoShieldCheckmarkSharp className={styles.shieldIcon} />
            <span> {renderGuaranteeText()}</span>
          </p>
          <div className={styles.buttonsContainer}>
            <button
              className={styles.addToWishlist}
              onClick={handleAddToWishlist}
            >
              {constants.ADD_TO_WISHLIST}
            </button>
            <button className={styles.addToCart} onClick={handleAddToCart}>
              {constants.ADD_TO_CART}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default ShoppingCard;
