import React,{ useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Image from "../Image";
import Logo from "../../Assets/Logo.png";
import { USER } from "../../constants/component.constants";
import UserContext from "../../Contexts/UserContext";

function Header() {
  const { isLoggedIn, onLogout } = useContext(UserContext);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoContainer}>
        <Link to="/" className={styles.logoLink}>
          <Image imgSrc={Logo} imgAlt="logo" className={styles.logo} />
        </Link>
      </div>

      {!isLoginPage && (
        // Conditionally render Home and AllMovies
        <div className={styles.navigationLinks}>
          <Link to="/" className={styles.navigationLink}>
            HOME
          </Link>
          <Link to="/allMovies" className={styles.navigationLink}>
            ALLMOVIES
          </Link>

          {/* Conditionally render NowShowing if logged in */}
          {isLoggedIn && (
            <Link to="/showTime" className={styles.navigationLink}>
              NOW SHOWING
            </Link>
          )}
        </div>
      )}
      {!isLoginPage && (
        <div className={styles.userInfo}>
          {/* Conditionally render Login or Hi User | Logout */}
          {isLoggedIn ? (
            <div>
              <span className={styles.greeting}>{`Hi ${USER.name} | `}</span>
              <button onClick={onLogout} className={styles.logoutBtn}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className={styles.navigationLink}>
              LOGIN
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
