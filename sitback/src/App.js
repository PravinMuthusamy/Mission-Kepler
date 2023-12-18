import React, { useState, useEffect } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { fetchCategories } from './services/Api.service';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import NotFound from './components/NotFound';

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
        console.log('Error');
      }
    };

    fetchData();
  }, []);
  
  return (
    <Routes>
        <Route path="/" exact element={<HomePage categories={categories}/>} />
        <Route path="/categories/:categoryId" element={<ShoppingPage categories={categories}/>} />
        <Route path="/confirmOrder" element={<OrderConfirmationPage categories={categories}/>} />
        <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
