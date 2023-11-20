import React from 'react';
import searchIcon from '../assets/images/search-solid.svg';
import searchBarStyles from '../css/searchBar.module.css'

const SearchBar = () => {
  return (
   <div className={searchBarStyles.container}>
      <img src={searchIcon} alt="Search Icon" className={searchBarStyles.icon} />
      <input type="text" placeholder="Search users" className={searchBarStyles.input} />
    </div> 
  );
};

export default SearchBar;