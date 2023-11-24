import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Image from '../../components/Image/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://jsonmockserver.vercel.app/api/shopping/furniture/categories')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []); 

  return (
    <>
    <div className="container">
      <Header/> 
      <div className="content-container">
      <p className='caption-a'>Your Home, With Love</p>
      <p className='caption-b'>Come, Choose from millions of products</p>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.id} className="category-card">
            <Image imgSrc={category.photo} imgAlt={category.name} className="category-image" />
            <h3 className="category-title">{category.category}</h3>
            <p className="category-description">{category.description}</p>
            <Link to={`/categories/${category.id}`} className="shop-now-button">SHOP NOW</Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default HomePage;
