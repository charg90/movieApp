import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./../styles/movie.module.css";
import CircularProgressBar from "./../Components/CircularProgressBar";
const Movie = () => {
  let token = sessionStorage.getItem("token");
  const [movie, setMovie] = useState(null);
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieID}?api_key=ef914df2994fae559350d18795448351&language=en-US&external_source=imdb_id`
      )
      .then((response) => setMovie(response.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {!token && <Navigate to="/" />}

      {!movie && <p>cargando...</p>}
      {movie && (
        <div className="container d-flex align-items-center mt-5">
          <div className="row mb-2">
            <div className=" col-xs-12 col-md-4 mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div
              className={`${styles.movieInfo}  col-xs-12 col-md-8 d-flex flex-column justify-content-center align-items-center `}
            >
              <h5>Titulo: {movie.original_title}</h5>
              <h5>fecha de estreno : {movie.release_date}</h5>
              <h5>Genero:</h5>
              <ul>
                {movie.genres.map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </ul>
              <div
                className={` d-flex  w-100   justify-content-center h-25 ${styles.container}`}
              >
                <div className={`${styles.circularProgressBarContainer}`}>
                  <h5 className="text-center">rating </h5>
                  <CircularProgressBar
                    value={Math.round(movie.vote_average * 10)}
                    text={`${Math.round(movie.vote_average * 10)}`}
                  />
                </div>
                <div style={{ width: "8rem", height: "8rem" }}>
                  <h5 className="text-center">Popularity </h5>
                  <CircularProgressBar
                    value={Math.round(movie.popularity / 100)}
                    text={`${Math.round(movie.popularity / 100)}`}
                  />
                </div>
              </div>
              <p className="mt-4">{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
