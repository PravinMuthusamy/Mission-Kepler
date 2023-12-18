// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllMovies from "./pages/AllMoviesPage";
import LoginPage from "./pages/LoginPage";
import NowShowing from "./pages/NowShowingPage";
import HomePage from "./pages/HomePage";
import { userIsLoggedIn, loginUser, logoutUser } from "./services/AuthService";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(userIsLoggedIn());

  // On component mount, check local storage for user information
  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (enteredUserName, password) => {
    const user = loginUser(enteredUserName, password);

    if (user) {
      // Successful login
      console.log("Login successful");
      setLoggedIn(true);
      // Store user information in local storage
      localStorage.setItem("userName", enteredUserName);
    } else {
      // Failed login
      console.log("Invalid credentials");
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
    // Remove user information from local storage on logout
    localStorage.removeItem("userName");
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
          />
          <Route path="/allMovies" element={<AllMovies />} />
          <Route
            path="/login"
            element={<LoginPage onLogin={handleLogin} />}
          ></Route>
          {isLoggedIn ? (
            <Route path="/showTime" element={<NowShowing />} />
          ) : (
            <Route
              path="/showTime"
              element={<LoginPage onLogin={handleLogin} onLogout={handleLogout} />}
            />
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
