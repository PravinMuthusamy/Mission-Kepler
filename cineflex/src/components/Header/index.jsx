import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Image from '../Image'
import Logo from '../../Assets/Logo.png'

function Header({ isLoggedIn, onLogout }) {
    const userName = localStorage.getItem("userName");
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoContainer}>
        <Image imgSrc={Logo} imgAlt='logo' className={styles.logo} />

        {/* Conditionally render Home and AllMovies */}
      </div>
        <div className={styles.navigationLinks}>
          <Link to="/" className={styles.navigationLink}>HOME</Link>
          <Link to="/allMovies" className={styles.navigationLink}>ALLMOVIES</Link>
          
          {/* Conditionally render NowShowing if logged in */}
          {isLoggedIn && (
            <Link to="/showTime" className={styles.navigationLink}>NOW SHOWING</Link>
          )}
        </div>

      <div className={styles.userInfo}>
        {/* Conditionally render Login or Hi User | Logout */}
        {isLoggedIn ? (
          <div>
            <span className={styles.greeting}>{`Hi ${userName} | `}</span>
            <button onClick={onLogout} className={styles.logoutBtn}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className={styles.navigationLink}>LOGIN</Link>
        )}
      </div>
    </div>
  );
}

export default Header;
