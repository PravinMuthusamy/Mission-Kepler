// Import necessary libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';

// App component
function App() {
  return (
    <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/categories/:categoryId" element={<ShoppingPage />} />
    </Routes>
  );
}

export default App;
