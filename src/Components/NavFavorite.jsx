import React from "react";
import useFavoriteMovies from "./../zustand/stores/favoriteMovies";
import styles from "./../styles/navFavorites.module.css";
const NavFavorite = () => {
  const favoriteMovies = useFavoriteMovies((state) => state.favoriteMovies);
  const deleteFavMovie = useFavoriteMovies((state) => state.deleteMovie);

  return (
    <>
      <li className="nav-item dropdown d-flex  align-items-center justify-content-center mx-1">
        <a
          className={`${styles.icon} nav-link dropdown-toggle`}
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ❤️
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {favoriteMovies.length === 0 && (
            <span className="d-flex justify-content-center">
              no hay favoritos{" "}
            </span>
          )}
          {favoriteMovies.map((movies) => {
            return (
              <li
                key={movies.id}
                className="d-flex justify-content-around mt-1"
              >
                <img
                  src={movies.imgUrl}
                  alt="no se encontro la pelicula"
                  style={{ height: "7rem" }}
                />
                <p className="align-self-center mx-2">{movies.title}</p>

                <button
                  className="btn btn-block"
                  onClick={() => deleteFavMovie(movies.id)}
                >
                  🗑️
                </button>
              </li>
            );
          })}
        </ul>
      </li>
    </>
  );
};

export default NavFavorite;
