import React from "react";
import styles from "./../styles/dashboard.module.css";
import { Link } from "react-router-dom";
import useStore from "./../zustand/stores/favoriteMovies";

const Cards = ({ id, original_title, poster_path, overview }) => {
  const favorite = useStore((state) => state.favoriteMovies);
  const addFavorite = useStore((state) => state.addFavorite);
  const addOrRemoveFromFavs = (e) => {
    const id = e.currentTarget.dataset.movieId;
    const parentInfo = e.currentTarget.parentElement;
    const imgUrl = parentInfo.querySelector("img").getAttribute("src");
    const title = parentInfo.querySelector("h5").innerText;

    const duplicate = favorite.find((f) => f.id === id);
    if (duplicate) {
      swal("Ya tiene esta pelicula en favoritos");
      return;
    }
    const favoriteMovieInfo = {
      id,
      imgUrl,
      title,
      overview,
    };
    addFavorite(favoriteMovieInfo);
  };
  return (
    <div className=" col-sm-12 col-md-4 col-lg-3   ">
      <div className="card my-3">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="card-img-top"
          alt="..."
        />
        <div className={`${styles.cardBody} card-body  d-flex flex-column`}>
          <h5 className="card-title text-center">{original_title}</h5>

          <Link
            to={`/movie?movieID=${id}`}
            className={`${styles.submitFormButton} btn  btn-primary m-0 `}
          >
            View Detail
          </Link>
        </div>

        <button
          className={styles.favoriteBtn}
          onClick={addOrRemoveFromFavs}
          data-movie-id={id}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default Cards;
