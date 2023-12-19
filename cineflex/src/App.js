// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllMovies from './pages/AllMoviesPage';
import LoginPage from './pages/LoginPage';
import NowShowing from './pages/NowShowingPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import { userIsLoggedIn, loginUser, logoutUser } from './services/AuthService';
import UserContext from './Contexts/UserContext';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(userIsLoggedIn());

  // On component mount, check local storage for user information
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (enteredUserName, password) => {
    const user = loginUser(enteredUserName, password);

    if (user) {
      // Successful login
      console.log('Login successful');
      setLoggedIn(true);
      // Store user information in local storage
      localStorage.setItem('userName', enteredUserName);
      return true;
    } else {
      // Failed login
      console.log('Invalid credentials');
      return false;
    }
  };

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
    // Remove user information from local storage on logout
    localStorage.removeItem('userName');
  };

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={{ isLoggedIn, onLogout: handleLogout, onLogin: handleLogin }}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route path="/allMovies" element={<AllMovies />} />
            <Route
              path="/login"
              element={<LoginPage/>}
            ></Route>
            {isLoggedIn ? (
              <Route path="/showTime" element={<NowShowing/>} />
            ) : (
              <Route
                path="/showTime"
                element={<LoginPage/>}
              />
            )}
          </Routes>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
