import React from 'react';
import styles from '../css/userDetailCards.module.css';


const UserDetailCard = ({ peopleData }) => {
  return (
    <div className={styles.cardList}>
      {peopleData.map((person, index) => (
        <div key={index} className={styles.card}>
          <img src={person.image} alt={person.name} className={styles.image} />
          <div className={styles.details}>
            <p className={styles.name}>{person.name}</p>
            <p className={styles.location}>{`${person.city}, ${person.country}`}</p>
            <ul className={styles.hobbies}>
              {person.hobbies.map((hobby, hobbyIndex) => (
                <li key={hobbyIndex}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserDetailCard;
