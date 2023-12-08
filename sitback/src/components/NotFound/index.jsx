import React from 'react';
import styles from "./NotFound.module.css"
import * as constants from '../../constants/AppConstants'

const NotFound = () => {
  return (
    <div className={styles.notfoundContainer}>
      <h2 className={styles.notfoundHeading}>{constants.NOT_FOUND_ERROR}</h2>
      <p className={styles.notfoundDescription}>{constants.NOT_FOUND_ERROR_DESCRIPTION}</p>
    </div>
  );
};

export default NotFound;
