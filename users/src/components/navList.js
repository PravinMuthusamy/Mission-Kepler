import React from "react";
import navListStyles from "../css/navList.module.css";

const NavList = ({userRoles}) => {
  return (
    <nav >
      <ul className={navListStyles.nav_list}>
        {userRoles.map((role) => (
          <li key={role}>
            <a href="#" className={navListStyles.nav_link}>
              {role}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
