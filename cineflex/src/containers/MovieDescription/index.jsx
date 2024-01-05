import { useEffect, useMemo, useContext, useState } from "react";
import styles from "./MovieDescription.module.css";
import { FaThumbsUp } from "react-icons/fa";
import Image from "../../components/Image";
import withAdvertisement from "../../HOC/withAdvertisement";
import { MOVIE_DETAILS } from "../../constants";
import { getFormattedTime, getRandomLargeAd } from "../../utils/ad.utils";
import { MovieContext } from "../../contexts/MovieContext";

const MovieDescription = ({
  timer,
  message,
  showAd,
  showNotification,
  displayHandler,
  stopAd,
}) => {
  const memoizedAd = useMemo(() => getRandomLargeAd(), []);
  const [currentMovie, setCurrentMovie] = useState({});
  const { movies, updateMovies } = useContext(MovieContext);
  const { link, actors, id, isLiked, movie, likes, description } =
    movies.data[movies.currentMovieIndex];

  const likeIconClickHandler = () => {
    updateMovies(id);
  };

  useEffect(() => {
    let interval;

    if (currentMovie.id !== movies.data[movies.currentMovieIndex].id) {
      setCurrentMovie(movies.data[movies.currentMovieIndex]);
      stopAd();
      displayHandler(
        MOVIE_DETAILS.displayTime,
        MOVIE_DETAILS.displayContent,
        false
      );
    } else if (timer > 0 && message === MOVIE_DETAILS.displayContent) {
      interval = setInterval(() => {
        displayHandler(timer - 1, MOVIE_DETAILS.displayContent, false);
      }, 1000);
    } else if (timer <= 0 && message === MOVIE_DETAILS.displayContent) {
      displayHandler(MOVIE_DETAILS.adTime, MOVIE_DETAILS.adContent, true);
    } else if (timer > 0 && message === MOVIE_DETAILS.adContent) {
      interval = setInterval(() => {
        displayHandler(timer - 1, MOVIE_DETAILS.adContent, true);
      }, 1000);
    } else if (timer <= 0 && message === MOVIE_DETAILS.adContent) {
      stopAd();
    }

    return () => {
      clearInterval(interval);
    };
  }, [
    currentMovie.id,
    movies.currentMovieIndex,
    timer,
    message,
    displayHandler,
    stopAd,
    movies.data,
  ]);

  if (movies.currentMovieIndex === -1) {
    return <p className={styles.noMovie}>{MOVIE_DETAILS.upcoming}</p>;
  }

  return (
    <div className={styles.movieDetailsContainer}>
      {showAd ? (
        <Image className={styles.adImage} imgSrc={memoizedAd} imgAlt="ad" />
      ) : (
        <>
          <div className={styles.movieDetailsHeader}>
            <div>
              <h2 className={styles.movieTitle}>{movie}</h2>
              <p className={styles.movieLikes}>
                {likes.toString().concat(MOVIE_DETAILS.likes)}
              </p>
            </div>
            <div
              className={`${styles.likeContainer} ${
                isLiked && styles.likedIcon
              }`}
              onClick={likeIconClickHandler}
            >
              <FaThumbsUp />
            </div>
          </div>
          <Image
            className={styles.movieDetailsImg}
            imgSrc={link}
            imgAlt={movie}
          />
          <p className={styles.movieDescription}>{description}</p>
          <h3 className={styles.actorsTitle}>{MOVIE_DETAILS.actors}</h3>
          {actors.map((actor) => (
            <p key={actor} className={styles.movieActor}>
              {actor}
            </p>
          ))}
        </>
      )}
      {showNotification && (
        <p className={styles.adDescription}>
          {message.concat(getFormattedTime(timer))}
        </p>
      )}
    </div>
  );
};

const MovieDescrptionWithAd = withAdvertisement(MovieDescription);

export default MovieDescrptionWithAd;
