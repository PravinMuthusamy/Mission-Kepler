import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./Trailers.module.css";
import Image from "../Image";
import SintelImage from "../../Assets/sindel-background.png";

function Trailers({ isLoggedIn }) {
  const history = useHistory();

  const handleWatchNow = () => {
    if (isLoggedIn) {
      // Redirect to Now Watching page
      history.push("/nowWatching");
    } else {
      // Redirect to Login page
      history.push("/login");
    }
  };

  return (
    <div className={styles.trailerContainer}>
      <div className={styles.trailerImage}>
        <Image imgSrc={SintelImage} imgAlt="Sintel" className={styles.image} />
      </div>
      <div className={styles.trailerDetails}>
        <h2 className={styles.title}>Sintel</h2>
        <p className={styles.description}>
          Sintel tells the story of a friendship between a girl named Sintel,a
          baby dragon and the desparate lengths she will go to when the
          friendshipis taken from her.Sintel is created Blender in 2010 as a pet
          project to demonstrate Blender capabilities.
        </p>
        <button className={styles.watchNowButton} onClick={handleWatchNow}>
          WATCH NOW
        </button>
      </div>
    </div>
  );
}

export default Trailers;
