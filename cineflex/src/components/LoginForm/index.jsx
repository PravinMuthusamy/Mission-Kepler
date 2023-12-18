import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_FORM } from "../../constants/component.constants";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onLogin }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = () => {
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (!enteredUsername || !enteredPassword) {
      setErrorMessage("Please enter both username and password");
      return;
    }

    // Call onLogin function with entered username and password
    const loginSuccess = onLogin(enteredUsername, enteredPassword);

    if (loginSuccess) {
      // Redirect to home page after successful login
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <form>
      <div className={styles.errorMessage}>{errorMessage}</div>
      <div className={styles.inputGroup}>
        <label htmlFor={LOGIN_FORM.email} className={styles.inputLabel}>
          {LOGIN_FORM.email}
        </label>
        <input
          type="email"
          ref={usernameRef}
          name={LOGIN_FORM.email}
          id={LOGIN_FORM.email}
          className={styles.inputField}
          defaultValue={LOGIN_FORM.emailValue}
        />
      </div>
      <div className={styles.inputGroup}>
      <label htmlFor={LOGIN_FORM.password} className={styles.inputLabel}>
          {LOGIN_FORM.password}
        </label>
        <input type="password" ref={passwordRef} name={LOGIN_FORM.password}
          id={LOGIN_FORM.password}
          className={styles.inputField}
          defaultValue={LOGIN_FORM.passwordValue}/>
      </div>
      <button type="button" className={styles.loginBtn} onClick={handleLoginClick}>
      {LOGIN_FORM.button}
      </button>
    </form>
  );
};

export default LoginForm;
