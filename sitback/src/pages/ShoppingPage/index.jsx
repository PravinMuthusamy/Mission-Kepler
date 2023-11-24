import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import CartContainer from './CartContainer'; 

const ShoppingPage = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch products based on categoryId from API 2
    fetch(`https://jsonmockserver.vercel.app/api/shopping/furniture/categories/${categoryId}/products`)
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, [categoryId]);

  const handleAddToCart = (product) => {
    // Update the 'cart' state with the selected product
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Shopping Page</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      {/* {cart.length > 0 && <CartContainer cart={cart} />} */}
    </div>
  );
};

export default ShoppingPage;
