import React,{ useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Image from "../Image";
import Logo from "../../Assets/Logo.png";
import { USER } from "../../constants/component.constants";
import UserContext from "../../contexts/UserContext";
import { ROUTE_PATHS } from "../../constants";
import { PUBLIC_NAVS } from "../../constants";
import { PRIVATE_NAVS } from "../../constants";

function Header() {
  const { isLoggedIn, onLogout } = useContext(UserContext);
  const location = useLocation();
  const isLoginPage = location.pathname === ROUTE_PATHS.login;

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoContainer}>
        <Link to={ROUTE_PATHS.home} className={styles.logoLink}>
          {/* <Image imgSrc={Logo} imgAlt="logo" className={styles.logo} /> */}
          <div className={styles.headerLogo}>
            Cine<span>FLEX</span>
          </div>
        </Link>
      </div>

      {!isLoginPage && (
        <div className={styles.navigationLinks}>
          <Link to={ROUTE_PATHS.home}   className={`${styles.navigationLink} ${
              location.pathname === ROUTE_PATHS.home ? styles.selected : ""
            }`}>
            {PUBLIC_NAVS.homeLabel}
          </Link>
          <Link to={ROUTE_PATHS.allMovies} className={`${styles.navigationLink} ${
              location.pathname === ROUTE_PATHS.allMovies ? styles.selected : ""
            }`}>
            {PUBLIC_NAVS.allMovieslabel}
          </Link>

          {isLoggedIn && (
            <Link to={ROUTE_PATHS.showTime} className={`${styles.navigationLink} ${
              location.pathname === ROUTE_PATHS.showTime ? styles.selected : ""
            }`}>
             {PRIVATE_NAVS.nowShowingLabel}
            </Link>
          )}
        </div>
      )}
      {!isLoginPage && (
        <div className={styles.userInfo}>
          {isLoggedIn ? (
            <div>
              <span className={styles.greeting}>{`Hi ${USER.name} | `}</span>
              <button onClick={onLogout} className={styles.logoutBtn}>
                {PUBLIC_NAVS.logoutlabel}
              </button>
            </div>
          ) : (
            <Link to={ROUTE_PATHS.login} className={`${styles.navigationLink} ${
              location.pathname === ROUTE_PATHS.login ? styles.selected : ""
            }`}>
              {PUBLIC_NAVS.loginlabel}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Header;
