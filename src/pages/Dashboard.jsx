import React, { useEffect, useState } from "react";
import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import styles from "./../styles/dashboard.module.css";

const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  const movieList = useStore((state) => state.movies);
  const addFavorite = useStore((state) => state.addFavorite);
  const fetchMovies = useStore((state) => state.fetchMovies);

  let token = sessionStorage.getItem("token");

  const addOrRemoveFromFavs = (e) => {
    const id = e.currentTarget.dataset.movieId;
    const parentInfo = e.currentTarget.parentElement;
    const imgUrl = parentInfo.querySelector("img").getAttribute("src");
    const title = parentInfo.querySelector("h5").innerText;
    const overView = parentInfo.querySelector("p").innerText;
    const duplicate = favorite.find((f) => f.id === id);
    if (duplicate) {
      swal("Ya tiene esta pelicula en favoritos");
      return;
    }
    const favoriteMovieInfo = {
      id,
      imgUrl,
      title,
      overView,
    };
    addFavorite(favoriteMovieInfo);
  };

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=ef914df2994fae559350d18795448351&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    fetchMovies(endPoint);
  }, [favorite]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="container">
        <div className="row">
          {movieList.map((movie) => {
            return (
              <div className=" col-sm-12 col-md-4 col-lg-3   " key={movie.id}>
                <div className="card my-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div
                    className={`${styles.cardBody} card-body  d-flex flex-column`}
                  >
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">
                      {movie.overview.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/movie?movieID=${movie.id}`}
                      className={`${styles.submitFormButton} btn  btn-primary m-0 `}
                    >
                      View Detail
                    </Link>
                  </div>

                  <button
                    className={styles.favoriteBtn}
                    onClick={addOrRemoveFromFavs}
                    data-movie-id={movie.id}
                  >
                    ❤️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
