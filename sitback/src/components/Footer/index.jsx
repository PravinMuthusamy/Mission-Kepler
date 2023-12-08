import React from 'react';
import styles from "./Footer.module.css";
import * as constants from '../../constants/AppConstants'

function Footer() {
    return (
        <div className={styles.footer}>
            <p>{constants.COPYRIGHTS}</p>
        </div>
    );
}

export default Footer;