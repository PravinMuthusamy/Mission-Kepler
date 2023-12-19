import { useState } from "react";

const withAdvertisement = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    const [advertisementState, setAdvertisementState] = useState({
      adTimer: 0,
      adMessage: "",
      isAdVisible: false,
      isNotificationVisible: false,
      isAdPlayed: false,
    });

    const displayAdHandler = (time, message, isAd) => {
      if (isAd) setAdvertisementState({ ...advertisementState, isAdPlayed: true });
      setAdvertisementState({
        ...advertisementState,
        adTimer: time,
        adMessage: message,
        isAdVisible: isAd,
        isNotificationVisible: true,
      });
    };

    const stopAd = () => {
      setAdvertisementState({
        ...advertisementState,
        adTimer: 0,
        adMessage: "",
        isAdVisible: false,
        isNotificationVisible: false,
      });
    };

    return <WrappedComponent {...props} {...advertisementState} displayHandler={displayAdHandler} stopAd={stopAd} />;
  };

  return EnhancedComponent;
};

export default withAdvertisement;
