import React from 'react';
import LoginForm from "../../components/LoginForm";
import styles from './LoginPage.module.css';
import { LOGIN } from "../../constants/container.constants";

const LoginPage = () => {

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.loginFormContainer}>
        <h2 className={styles.formTitle}>{LOGIN.title}</h2>
        <p className={styles.formDescription}>{LOGIN.description}</p>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
