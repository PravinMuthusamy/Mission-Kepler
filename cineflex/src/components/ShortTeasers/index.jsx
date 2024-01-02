import { useEffect, useState } from "react";
import styles from "./ShortTeasers.module.css";
import TeaserCard from "../TeaserCard";
import Loader from "../Loader";
import { getTeasers } from "../../services/MovieService";
import { SHORT_TEASERS } from "../../constants/container.constants";
import { NOW_SHOWING } from "../../constants";

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
      teaserContent = teasers.map((teaser) => <TeaserCard key={teaser.title} title={teaser.title} videoSrc={NOW_SHOWING.videoLink} />);
    } else {
      teaserContent = SHORT_TEASERS.noTeasers;
    }
    return teaserContent;
  };

  return (
    <div className={styles.teasersSectionContainer}>
      <h2 className={styles.teasersTitle}>{SHORT_TEASERS.title}</h2>
      <div className={styles.teasersContainer}>{isLoaded ? getTeaserContent() : <Loader />}</div>
    </div>
  );
};

export default ShortTeasers;