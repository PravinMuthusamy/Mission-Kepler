import React from 'react';
import searchBarStyles from '../css/searchBar.module.css'
import searchIcon from '../assets/images/search-solid.svg';
import Image from './image';
import placeholderImage from '../assets/images/download.jpeg';
import * as constants from '../constants/constants'

const SearchBar = ({imageError, onError}) => {
  return (
   <div className={searchBarStyles.container}>
      <Image imgSrc={imageError ? placeholderImage : searchIcon} imgAlt={constants.SEARCH_ICON_ALT} className={searchBarStyles.icon} onError={onError}/>
      <input type="text" placeholder={constants.SEARCH_INPUT_PLACEHOLDER} className={searchBarStyles.input} />
    </div> 
  );
};

export default SearchBar;