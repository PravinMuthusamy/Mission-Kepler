import React from 'react';
import styles from '../css/userDetailCards.module.css';
import UserCard from './userCard';

const UserDetailCard = ({ peopleData }) => {
  return (
    <main className={styles.cardList}>
      {peopleData.map((person) => (
        <UserCard key={person} person={person} />
      ))}
    </main>
  );
};

export default UserDetailCard;
