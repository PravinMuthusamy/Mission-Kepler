import React from 'react';
import styles from './HomePage.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContentContainer from '../../container/ContentContainer';

const HomePage = ({categories}) => {
  return (
    <>
      <div className={styles.container}>
        <Header categories={categories}/>
        <ContentContainer categories={categories} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
