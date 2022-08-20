import { useRef, useEffect, useState } from "react";
import useGetMovies from "./../CustomHooks/usGetMovies";
import styles from "./../styles/carousel.module.css";
import useStore from "./../zustand/stores/favoriteMovies";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Carousel = ({ url }) => {
  const [movieList, loading] = useGetMovies(url);
  // const movieList = useStore((state) => state.movies);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
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
        {movieList.map((img) => (
          <>
            <motion.div className={` ${styles.item} `} key={img.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${img.poster_path}`}
                className={` ${styles.img}`}
              />
              <Link
                to={`/movie?movieID=${img.id}`}
                className="btn w-50 btn-primary text-center"
              >
                ver mas
              </Link>
            </motion.div>
            {/* <Link
              to={`/movie?movieID=${img.id}`}
              className={`${styles.seeMoreBtn}`}
            >
              <button
                className={`${styles.btnText} btn btn-primary text-center `}
                key={img.id}
              >
                see more
              </button>
            </Link> */}
          </>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;
