import { memo } from "react";
import { FaThumbsUp } from "react-icons/fa";
import styles from './MovieListCard.module.css';
import Image from "../Image";
import { MOVIE_CARDS } from "../../constants";

const MovieListCard = ({ movieData, index, movieHandler, likeHandler }) => {
  const { link, movie, likes, id, isLiked } = movieData;
  console.log("movie listtttt...");

  const cardClickHandler = () => {
    movieHandler(index);
  };

  const iconClickHandler = () => {
    likeHandler(id);
  };

  return (
    <div className={styles.movieCard}>
      <Image className={styles.movieListImage} imgSrc={link} imgAlt={movie} onClick={cardClickHandler} />
      <div className={styles.movieListCardDetails}>
        <div>
          <p className={styles.movieListCardTitle}>{movie}</p>
          <p className={styles.movieListCardLikes}>{likes.toString().concat(MOVIE_CARDS.likes)}</p>
        </div>
        <FaThumbsUp className={`${styles.movieListCardLikeIcon} ${isLiked && styles.movieListCardLikedIcon}`} onClick={iconClickHandler} />
      </div>
    </div>
  );
};

export default memo(MovieListCard);