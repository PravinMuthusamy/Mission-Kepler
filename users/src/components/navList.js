import React from "react";
import navListStyles from "../css/navList.module.css";

const NavList = ({userRoles}) => {
  return (
    <nav >
      <ul className={navListStyles.nav_list}>
        {userRoles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
