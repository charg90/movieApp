import { useRef, useEffect, useState } from "react";

import styles from "./../styles/carousel.module.css";
import useStore from "./../zustand/stores/favoriteMovies";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Carousel = ({ mc }) => {
  const moviesList = useStore((state) => state.movies);

  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div
        ref={carousel}
        className={`${styles.carousel}`}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={`${styles.innerCarousel}`}
        >
          {mc.map((movie) => {
            return (
              <>
                <motion.div className={` ${styles.item} `} key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className={` ${styles.img}`}
                  />
                </motion.div>
                <Link
                  to={`/movie?movieID=${movie.id}`}
                  className={`${styles.seeMoreBtn}`}
                >
                  <button
                    className={`${styles.btnText} btn btn-primary text-center `}
                    key={movie.id}
                  >
                    View more
                  </button>
                </Link>
              </>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Carousel;
