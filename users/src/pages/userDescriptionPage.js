import React,{useState} from "react";
import styles from "../css/userDescriptionPage.module.css";
import SearchBar from "../components/searchBar"; 
import NavList from "../components/navList";
import UserDetailCard from "../components/userDetailCardContainer";
import users from "../data/users.json";
import userRoles from "../data/userRoles.json";

const UserDescriptionPage = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={styles.pageContainer}>
      <h1>Users</h1>
      <header className={styles.header}>
        <SearchBar imageError={imageError} onError={handleImageError}/>
        <NavList userRoles={userRoles} />
      </header>
      <UserDetailCard peopleData={users} imageError={imageError} onError={handleImageError}/>
    </div>
  );
};

export default UserDescriptionPage;
