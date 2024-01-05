import { useState, useEffect } from "react";
import { getTeasers } from "../../services/MovieService";

const useTeasers = () => {
  const [teasers, setTeasers] = useState([]);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    const fetchTeasers = async () => {
      try {
        const teasersData = await getTeasers();
        setTeasers(teasersData);
        setIsContentLoaded(true);
      } catch (e) {
        setTeasers([]);
      }
    };

    fetchTeasers();
  }, []);

  return { teasers, isContentLoaded };
};

export default useTeasers;
