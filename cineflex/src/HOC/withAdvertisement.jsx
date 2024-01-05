import { useState } from "react";

const withAdvertisement = (WrappedComponent) => {
  const NewEnhancedComponent = (props) => {
    const [advertisementState, setAdvertisementState] = useState({
      timer: 0,
      message: "",
      showAd: false,
      showNotification: false,
      isAdPlayed: false,
    });

    const displayAdHandler = (time, message, isAd) => {
      if (isAd){
       setAdvertisementState({ ...advertisementState, isAdPlayed: true });
      }
      setAdvertisementState({
        ...advertisementState,
        timer: time,
        showAd: isAd,
        message: message,
        showNotification: true,
      });
    };

    const stopAd = () => {
      setAdvertisementState({
        ...advertisementState,
        timer: 0,
        message: "",
        showAd: false,
        showNotification: false,
      });
    };

    return <WrappedComponent {...props} {...advertisementState} displayHandler={displayAdHandler} stopAd={stopAd} />;
  };

  return NewEnhancedComponent;
};

export default withAdvertisement;
