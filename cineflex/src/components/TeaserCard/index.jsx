import { useEffect, useRef, useMemo } from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import styles from "./TeaserCard.module.css";
import Image from "../Image";
import withAdvertisement from "../../HOC/withAdvertisement";
import sindel from "../../Assets/sindel-background.png";
import { TEASER_CARD } from "../../constants";
import { getFormattedTime,getRandomSmallAd } from "../../utils/ad.utils";

const TeaserCard = ({ title, videoSrc, timer, message, showAd, showNotification, isAdPlayed, displayHandler, stopAd }) => {
  const videoRef = useRef();
  const iconRef = useRef();
  const memoizedAd = useMemo(() => getRandomSmallAd(), []);

  const togglePlay = () => {
    !showAd && videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const playHandler = () => {
    if (!isAdPlayed && videoRef.current.currentTime < TEASER_CARD.contentTime)
      displayHandler(TEASER_CARD.contentTime - Math.floor(videoRef.current.currentTime), TEASER_CARD.videoContent, false);
    if (!showAd) iconRef.current.style.display = "none";
  };

  const pauseHandler = () => {
    if (!showAd) iconRef.current.style.display = "";
  };

  useEffect(() => {
    let interval;

    // Run remaining time for ad
    if (timer > 0 && message === TEASER_CARD.videoContent) {
      interval = setInterval(() => {
        if (!videoRef.current.paused)
          displayHandler(TEASER_CARD.contentTime - Math.floor(videoRef.current.currentTime), TEASER_CARD.videoContent, false);
      }, 1000);
    }
    // Display ad
    else if (timer <= 0 && message === TEASER_CARD.videoContent) {
      iconRef.current.style.display = "none";
      videoRef.current.pause();
      displayHandler(TEASER_CARD.adTime, TEASER_CARD.adContent, true);
    }
    // Run remaining time for ad
    else if (timer > 0 && message === TEASER_CARD.adContent) {
      interval = setInterval(() => {
        displayHandler(timer - 1, TEASER_CARD.adContent, true);
      }, 1000);
    }
    // Stop ad
    else if (timer <= 0 && message === TEASER_CARD.adContent) {
      videoRef.current.play();
      stopAd();
    }

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className={styles.teaserCard}>
      <div className={styles.videoContainer} onClick={togglePlay}>
        {showAd && <Image className="teaser-img" src={memoizedAd} alt={title} />}
        <video className={styles.teaserVideo} poster={sindel} ref={videoRef} onPlay={playHandler} onPause={pauseHandler}>
          <source src={videoSrc} type="video/mp4" />
          {TEASER_CARD.videoWarning}
        </video>
        <span className={styles.playIconContainer} ref={iconRef}>
          <MdOutlinePlayCircleFilled onClick={playHandler} className={styles.playIcon} />
        </span>
      </div>
      <h3 className={styles.teaserTitle}>{title}</h3>
      {showNotification && <p className={styles.teaserDescription}>{`${message} ${getFormattedTime(timer)}`}</p>}
    </div>
  );
};

const TeaserCardWithAd = withAdvertisement(TeaserCard);

export default TeaserCardWithAd;
