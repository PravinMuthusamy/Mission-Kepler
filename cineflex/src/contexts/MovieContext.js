import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import { ROUTE_PATHS } from "../constants";

export const MovieContext = createContext({
    movies: { data: [], currentMovieIndex: -1 },
    updateMovies: () => {},
    setMovies: () => {},
  });
  
  const MovieContextProvider = ({ children }) => {
    const [movies, setMovies] = useState(MovieContext);
    const { isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();
  
    const updateMovies = (id) => {
      if (isLoggedIn) {
        setMovies((oldData) => {
          const updatedMovies = oldData.data.map((movie) => {
            if (id === movie.id) {
              return movie.isLiked ? { ...movie, likes: +movie.likes - 1, isLiked: false } : { ...movie, likes: +movie.likes + 1, isLiked: true };
            } else {
              return movie;
            }
          });
          return { ...oldData, data: updatedMovies };
        });
      } else {
        navigate(ROUTE_PATHS.login);
      }
    };
  
    return <MovieContext.Provider value={{ movies, updateMovies,setMovies  }}>{children}</MovieContext.Provider>;
  };
   
  export default MovieContextProvider;