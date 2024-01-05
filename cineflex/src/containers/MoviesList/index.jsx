import { useState, useContext, useCallback } from "react";
import styles from "./MoviesList.module.css";
import MovieListCard from "../../components/MovieListCard";
import { MOVIES_LIST } from "../../constants/container.constants";
import { MovieContext } from "../../contexts/MovieContext";

const MoviesList = ({ movies }) => {
  const [moviesToShow, setMoviesToShow] = useState(MOVIES_LIST.moviesToShow);
  const { setMovies, updateMovies } = useContext(MovieContext);
  
  const totalMovies = movies.length;

  const handleClick = (e) => {
    if (moviesToShow < totalMovies) {
      setMoviesToShow((prevMoviesToShow) => {
        const currMovieCount = prevMoviesToShow + MOVIES_LIST.moviesToShow;
        if (currMovieCount >= totalMovies){
          e.target.style.display = "none";
        } 
        return currMovieCount;
      });
    }
  };

  const movieListHandler = useCallback(
    (index) => {
      setMovies( prevData => {
        return { ...prevData, currentMovieIndex: index };
      });
    },
    [setMovies]
  );

  const likesHandler = useCallback(
    (id) => {
      updateMovies(id);
    },
    [updateMovies]
  );

  const getMoviesContent = () => {
    let moviesContent = "";
    if (movies.length > 0) {
      moviesContent = movies.map((movie, index) => {
        if (index < moviesToShow)
          return (
            <MovieListCard
              key={movie.id}
              index={index}
              movieData={movie}
              movieHandler={movieListHandler}
              likeHandler={likesHandler}
            />
          );
        return null;
      });
    } else {
      moviesContent = MOVIES_LIST.upcoming;
    }
    return moviesContent;
  };

  return (
    <div className={styles.moviesListWrapper}>
      <h1 className={styles.movieListTitle}>{MOVIES_LIST.title}</h1>
      <div className={styles.moviesContainer}>{getMoviesContent()}</div>
      <button className={styles.trailerBtn} onClick={handleClick}>
        {MOVIES_LIST.button}
      </button>
    </div>
  );
};

export default MoviesList;
