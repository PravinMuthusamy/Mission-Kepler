import styles from "./OtherLanguages.module.css";
import { OTHER_LANGUAGES } from "../../constants/component.constants";

const OtherLanguages = () => {
  return (
    <div className={styles.otherLanguagesContainer}>
      <p className={styles.languagesTitle}>{OTHER_LANGUAGES.title}</p>
      <div className={styles.languageListContainer}>
        {OTHER_LANGUAGES.languagesList.map((language) => (
          <span key={language} className={styles.languageCard}>
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OtherLanguages;