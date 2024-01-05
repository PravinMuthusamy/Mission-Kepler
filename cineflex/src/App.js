import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMovies from "./pages/AllMoviesPage";
import LoginPage from "./pages/LoginPage";
import NowShowing from "./pages/NowShowingPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { userIsLoggedIn, loginUser, logoutUser } from "./services/AuthService";
import UserContext from "./contexts/UserContext";
import MovieContextProvider from "./contexts/MovieContext";
import { LOGIN_CREDENTIALS } from "./constants/service.constants";
import ProtectedRoute from "./components/ProtectedRoutes";
import { ROUTE_PATHS } from "./constants";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(userIsLoggedIn());

  useEffect(() => {
    const storedUserName = localStorage.getItem(
      LOGIN_CREDENTIALS.usernamelabel
    );
    if (storedUserName) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (enteredUserName, password) => {
    const user = loginUser(enteredUserName, password);

    if (user) {
      setLoggedIn(true);
      localStorage.setItem(LOGIN_CREDENTIALS.usernamelabel, enteredUserName);
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
    localStorage.removeItem(LOGIN_CREDENTIALS.usernamelabel);
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider
          value={{ isLoggedIn, onLogout: handleLogout, onLogin: handleLogin }}
        >
          <MovieContextProvider>
            <Header />
            <Routes>
              <Route path={ROUTE_PATHS.home} element={<HomePage />} />
              <Route path={ROUTE_PATHS.allMovies} element={<AllMovies />} />
              <Route path={ROUTE_PATHS.login} element={<LoginPage />}></Route>
              <Route path={ROUTE_PATHS.home} element={<ProtectedRoute />}>
                <Route path={ROUTE_PATHS.showTime} element={<NowShowing />} />
              </Route>
            </Routes>
          </MovieContextProvider>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
