import React from "react";
import { useEffect } from "react";

import useFavoriteMovies from "./../zustand/stores/favoriteMovies";
const NavFavorite = () => {
  const favoriteMovies = useFavoriteMovies((state) => state.favoriteMovies);
  const deleteFavMovie = useFavoriteMovies((state) => state.deleteMovie);

  useEffect(() => {
    console.log(favoriteMovies.length);
  }, []);

  return (
    <>
      <li className="nav-item dropdown d-flex  align-items-center justify-content-center">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          ❤️
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {favoriteMovies.length === 0 && <span>no hay favoritos </span>}
          {favoriteMovies.map((movies) => {
            return (
              <li
                key={movies.id}
                className="d-flex justify-content-around mt-1"
              >
                <img
                  src={movies.imgUrl}
                  alt="no se encontro la pelicula"
                  style={{ height: "5rem" }}
                />
                <p>{movies.title}</p>
                <p>{movies.active}</p>
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
