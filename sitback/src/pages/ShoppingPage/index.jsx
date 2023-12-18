import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './ShoppingPage.module.css'
import ShoppingCard from "../../components/ShoppingCards";
import Header from "../../components/Header";
import ShoppingContainer from "../../container/shoppingContainer";
import { fetchProductsByCategory } from "../../services/Api.service";

const ShoppingPage = ({categories}) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsByCategory(categoryId);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [categoryId]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart((oldcart) => {
        return oldcart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      setCart((oldcart) => [...oldcart, { ...product, quantity: 1 }]);
    }
  };

  const handleAddToWishlist = (product) => {
    const isProductInWishlist = wishlist.some((item) => item.id === product.id);

    if (!isProductInWishlist) {
      setWishlist([...wishlist, product]);
    }
  };

  const handleIncrement = (product) => {
    setCart((oldcart) => {
      return oldcart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const handleDecrement = (product) => {
    setCart((oldcart) => {
      return oldcart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
    });
  };

  return (
    <div className={styles.shoppingContainer}>
      <Header categories={categories}/>
      <div className={styles.shoppingContent}>
        <ul className={styles.shoppingList}>
          {products.map((product) => (
            <ShoppingCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </ul>
      </div>
      {((cart.length > 0) || (wishlist.length>0)) && (
        <div className={styles.shoppingContentContainer}>
          <ShoppingContainer
            cart={cart}
            wishlist={wishlist}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onAddToCart={handleAddToCart}
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingPage;
