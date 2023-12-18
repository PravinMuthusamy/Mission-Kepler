import React from "react";
import styles from "./HomePage.module.css";
import Header from "../../components/Header";
import CoverPicture from "../../components/CoverPicture";
import LotterySection from "../../components/LotterySection";
import Trailers from "../../components/Trailers";

function HomePage({ isLoggedIn, onLogout }) {
  return (
    <div className={styles.homePageWrapper}>
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <CoverPicture />
      <LotterySection />
      <Trailers isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default HomePage;
