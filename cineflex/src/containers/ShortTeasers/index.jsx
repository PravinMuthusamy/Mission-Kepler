
import styles from "./ShortTeasers.module.css";
import TeaserCard from "../../components/TeaserCard";
import Loader from "../../components/Loader";
import { SHORT_TEASERS } from "../../constants";
import { NOW_SHOWING } from "../../constants";
import useTeasers from "../../hooks/UseTeasers";

const ShortTeasers = () => {
  const { teasers, isContentLoaded } = useTeasers();

  const getTeaserContent = () => {
    if (teasers.length > 0) {
      return teasers.map((teaser) => (
        <TeaserCard
          key={teaser.title}
          title={teaser.title}
          videoLink={NOW_SHOWING.videoLink}
        />
      ));
    } else {
      return SHORT_TEASERS.upcoming;
    }
  };

  return (
    <div className={styles.teasersSectionContainer}>
      <h2 className={styles.teasersTitle}>{SHORT_TEASERS.title}</h2>
      <div className={styles.teasersContainer}>
        {isContentLoaded ? getTeaserContent() : <Loader />}
      </div>
    </div>
  );
};

export default ShortTeasers;
