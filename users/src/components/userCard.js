import React from 'react';
import styles from '../css/userDetailCards.module.css';
import Image from './image';
import placeHolderImage from '../assets/images/download.jpeg'

const UserCard = ({person, imageError, onError}) => {
    return(
        <article className={styles.card}>
          <Image imgSrc={imageError ? placeHolderImage : person.image} imgAlt={person.name} className={styles.image} onError={onError}/>
          <div className={styles.details}>
            <p className={styles.name}>{person.name}</p>
            <p className={styles.location}>{`${person.city}, ${person.country}`}</p>
            <ul className={styles.hobbies}>
              {person.hobbies.map((hobby, hobbyIndex) => (
                <li key={hobbyIndex}>{hobby}</li>
              ))}
            </ul>
          </div>
        </article>
    )
}

export default UserCard;