import React from "react";
import { useLocation } from "react-router-dom";
import styles from './OrderConfirmationPage.module.css';
import OrderCard from "../../components/OrderCards";
import Header from "../../components/Header";
import ContentContainer from "../../container/ContentContainer";
import Footer from "../../components/Footer";
import * as constants from '../../constants/AppConstants'

const OrderConfirmation = ({categories}) => {
  const location = useLocation();
  const { state } = location;
  const { cart } = state || {};

  if (!cart) {
    return <div>{constants.CART_NOT_AVAILABLE}</div>;
  }

  return (
    <div>
        <Header categories={categories}/>
    <div className={styles.orderConfirmationContainer}>
      <h3>{constants.ORDER_CONFIRMATION}</h3>
      <p>
        {constants.ORDER_CONFIRMATION_MSG}
      </p>
      <ul>
        {cart.map((product) => (
          <OrderCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
    <ContentContainer categories={categories} />
    <Footer/>
    </div>
  );
};

export default OrderConfirmation;
