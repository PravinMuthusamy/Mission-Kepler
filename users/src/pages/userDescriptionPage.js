import React from "react";
import SearchBar from "../components/searchBar"; // Adjust the path based on your project structure
import styles from "../css/userDescriptionPage.module.css"; // Import styles
import NavList from "../components/navList";
import UserDetailCard from "../components/userDetailCard";
import users from "../data/users.json";
import userRoles from "../data/userRoles.json";

const UserDescriptionPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h1>Users</h1>
      <div className={styles.header}>
        <SearchBar />
        <NavList userRoles={userRoles}/>
      </div>

      <UserDetailCard peopleData={users} />
    </div>
  );
};

export default UserDescriptionPage;
