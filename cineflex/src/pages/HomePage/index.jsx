import React from "react";
import CoverPicture from "../../components/CoverPicture";
import LotterySection from "../../components/LotterySection";
import Trailers from "../../components/Trailers";
import OtherLanguages from "../../components/OtherLanguages";

function HomePage({ isLoggedIn }) {
  return (
    <div>
      <CoverPicture />
      <LotterySection />
      <Trailers isLoggedIn={isLoggedIn}/>
      <OtherLanguages /> 
    </div>
  );
}

export default HomePage;
