import React, { useState, useEffect } from 'react';
import { FaSortDown } from 'react-icons/fa';
import './Header.css'; 

const Header = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    // Fetch navigation items dynamically
    // Replace the following with your actual API call
    const fetchedNavItems = ['COUCHES', 'CHAIRS', 'DINING'];
    setNavItems(fetchedNavItems);
  }, []);

  return (
    <header className="header">
      <div className="left-section">
        <p className="sitback">SITBACK</p>
      </div>
      <nav className="nav-bar">
        {navItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
        <p className="user">
          Nijin Vinodan <FaSortDown className="down-icon" />
        </p>
    </header>
  );
};

export default Header;
