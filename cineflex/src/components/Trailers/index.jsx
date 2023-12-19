import React,{useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Trailers.module.css";
import Image from "../Image";
import { TRAILER } from "../../constants/component.constants";
import SintelImage from "../../Assets/sindel-background.png";
import UserContext from "../../Contexts/UserContext";

const Trailers = () => {
  const { isLoggedIn } = useContext(UserContext);
  const watchNowLink = isLoggedIn ? "/showTime" : "/login";

  return (
    <div className={styles.trailerContainer}>
      <h2 className={styles.trailerTitle}>{TRAILER.title}</h2>
      {!isLoggedIn && (
        <p className={styles.signInContainer}>
          {TRAILER.signInMsg} <Link to={"/login"}>{TRAILER.signInLink}</Link>
        </p>
      )}
      <div className={styles.movieContainer}>
        <div className={styles.trailerImage}>
          <Image
            imgSrc={SintelImage}
            imgAlt="Sintel"
            className={styles.image}
          />
        </div>
        <div className={styles.trailerDetails}>
          <h2 className={styles.title}>{TRAILER.movieTitle}</h2>
          <p className={styles.description}>{TRAILER.movieDescription}</p>
          <Link to={watchNowLink} className={styles.watchNowButton}>
            {TRAILER.button}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trailers;
