import { useEffect, useState, useContext } from "react";
import styles from "./AllMovies.module.css";
import Loader from "../../components/Loader";
import { getMovies } from "../../services/MovieService";
import { MovieContext } from "../../contexts/MovieContext";
import { LIKES } from "../../constants/component.constants";
import MoviesList from "../../containers/MoviesList";
import MovieDescrption from "../../containers/MovieDescription";

const AllMovies = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    getMovies()
      .then((movies) => {
        const moviesLiked = localStorage.getItem(LIKES.key) ?? [];
        movies = movies.map((movie) => {
          if (moviesLiked.includes(movie.id)) {
            return { ...movie, likes: Number(movie.likes) + 1, isLiked: true };
          } else {
            return movie;
          }
        });
        setMovies({ currentMovieIndex: 0, data: movies });
        setIsContentLoaded(true);
      })
      .catch(() => setMovies({ currentMovieIndex: -1, data: [] }));
  }, [setMovies]);

  if (!isContentLoaded) {
    return <Loader />;
  }

  return (
    <div className={styles.allMoviesContainer}>
      <MoviesList movies={movies.data} />
      <MovieDescrption/>
    </div>
  );
};

export default AllMovies;
