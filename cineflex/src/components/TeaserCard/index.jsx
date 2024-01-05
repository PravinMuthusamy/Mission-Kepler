import { useEffect, useRef, useMemo } from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import styles from "./TeaserCard.module.css";
import Image from "../Image";
import withAdvertisement from "../../HOC/withAdvertisement";
import sindel from "../../Assets/sindel-background.png";
import { TEASER_CARD } from "../../constants";
import { getFormattedTime,getRandomSmallAd } from "../../utils/ad.utils";

const TeaserCard = ({ title, videoLink, timer, message, showAd, showNotification, isAdPlayed, displayHandler, stopAd }) => {
  const videoRef = useRef();
  const iconRef = useRef();
  const memoizedAd = useMemo(() => getRandomSmallAd(), []);

  const togglePlay = () => {
    !showAd && videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const videoPlayHandler = () => {
    if (!showAd) iconRef.current.style.display = "none";
    if (!isAdPlayed && videoRef.current.currentTime < TEASER_CARD.contentTime)
      displayHandler(TEASER_CARD.contentTime - Math.floor(videoRef.current.currentTime), TEASER_CARD.videoContent, false);
  };

  const pauseHandler = () => {
    if (!showAd) iconRef.current.style.display = "";
  };

  useEffect(() => {
    let interval;
  
    const handleDisplay = () => {
      if (!videoRef.current.paused) {
        displayHandler(
          TEASER_CARD.contentTime - Math.floor(videoRef.current.currentTime),
          TEASER_CARD.videoContent,
          false
        );
      }
    };
  
    const handleAdDisplay = () => {
      iconRef.current.style.display = "none";
      videoRef.current.pause();
      displayHandler(TEASER_CARD.adTime, TEASER_CARD.adContent, true);
    };
  
    const handleAdCountdown = () => {
      displayHandler(timer - 1, TEASER_CARD.adContent, true);
    };
  
    const handleAdCompletion = () => {
      videoRef.current.play();
      stopAd();
    };
  
    if (timer > 0 && message === TEASER_CARD.videoContent) {
      interval = setInterval(handleDisplay, 1000);
    } else if (timer <= 0 && message === TEASER_CARD.videoContent) {
      handleAdDisplay();
    } else if (timer > 0 && message === TEASER_CARD.adContent) {
      interval = setInterval(handleAdCountdown, 1000);
    } else if (timer <= 0 && message === TEASER_CARD.adContent) {
      handleAdCompletion();
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [timer, displayHandler, message, stopAd]);
  

  return (
    <div className={styles.teaserCard}>
      <div className={styles.videoContainer} onClick={togglePlay}>
        {showAd && <Image className={styles.teaserImage} imgSrc={memoizedAd} imgAlt={title} />}
        <video className={styles.teaserVideo} poster={sindel} ref={videoRef} onPlay={videoPlayHandler} onPause={pauseHandler}>
          <source src={videoLink} type="video/mp4" />
          {TEASER_CARD.videoWarning}
        </video>
        <span className={styles.playIconContainer} ref={iconRef}>
          <MdOutlinePlayCircleFilled onClick={videoPlayHandler} className={styles.playIcon} />
        </span>
      </div>
      <h3 className={styles.teaserTitle}>{title}</h3>
      {showNotification && <p className={styles.teaserDescription}>{message.concat(getFormattedTime(timer))}</p>}
    </div>
  );
};

const TeaserCardWithAd = withAdvertisement(TeaserCard);

export default TeaserCardWithAd;
