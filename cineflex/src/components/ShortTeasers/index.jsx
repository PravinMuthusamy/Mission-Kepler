import { useEffect, useState } from "react";
import styles from "./ShortTeasers.module.css";
import TeaserCard from "../TeaserCard";
import Loader from "../Loader";
import { getTeasers } from "../../services/MovieService";
import { SHORT_TEASERS } from "../../constants/container.constants";

const ShortTeasers = () => {
  const [teasers, setTeasers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getTeasers()
      .then((teasers) => {
        setTeasers(teasers);
        setIsLoaded(true);
      })
      .catch(() => setTeasers([]));
  }, []);

  const getTeaserContent = () => {
    let teaserContent = "";
    if (teasers.length > 0) {
      teaserContent = teasers.map((teaser) => <TeaserCard key={teaser.title} title={teaser.title} videoSrc={teaser.videoSrc} />);
    } else {
      teaserContent = SHORT_TEASERS.noTeasers;
    }
    return teaserContent;
  };

  return (
    <div className={styles["teasers-section-container"]}>
      <h2 className={styles["teasers-title"]}>{SHORT_TEASERS.title}</h2>
      <div className={styles["teasers-container"]}>{isLoaded ? getTeaserContent() : <Loader />}</div>
    </div>
  );
};

export default ShortTeasers;