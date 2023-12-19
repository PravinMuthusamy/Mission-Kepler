import React from "react";
import CoverPicture from "../../components/CoverPicture";
import ErrorBoundary from "../../components/ErrorBoundary";
import Trailers from "../../components/Trailers";
import OtherLanguages from "../../components/OtherLanguages";
import LotteryForm from "../../components/LotteryForm";
import ShortTeasers from "../../components/ShortTeasers";

function HomePage() {
  return (
    <div>
      <CoverPicture/>
      <ErrorBoundary>
        <LotteryForm/>
      </ErrorBoundary>
      <Trailers/>
      <ShortTeasers/>
      <OtherLanguages/> 
    </div>
  );
}

export default HomePage;
