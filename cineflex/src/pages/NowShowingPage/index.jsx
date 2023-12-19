import { useRef } from "react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { NOW_SHOWING } from "../../constants/page.constants";
import styles from "./NowShowingPage.module.css";
import sindel from "../../Assets/sindel-background.png";

const NowShowing = () => {
  const videoRef = useRef();
  const iconRef = useRef();

  const playHandler = () => {
    iconRef.current.remove();
    videoRef.current.controls = true;
    videoRef.current.play();
  };

  return (
    <div className={styles.currentMovieContainer}>
      <h2 className={styles.pageTitle}>{NOW_SHOWING.title}</h2>
      <h1 className={styles.movieTitle}>{NOW_SHOWING.movieTitle}</h1>
      <div className={styles.videoContainer}>
        <video className={styles.movieVideo} poster={sindel} ref={videoRef}>
          <source src={NOW_SHOWING.videoLink} type="video/mp4" />
          {NOW_SHOWING.videoWarning}
        </video>
        <span className={styles.playIconContainer} ref={iconRef}>
          <MdOutlinePlayCircleFilled onClick={playHandler} className={styles.playIcon} />
        </span>
      </div>
      <p className={styles.movieDescription}>{NOW_SHOWING.movieDescription}</p>
    </div>
  );
};

export default NowShowing;