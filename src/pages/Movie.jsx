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
      {!movie && <p>cargando...</p>}
      {movie && (
        <div
          className={`${styles.containerBorder} container d-flex align-items-center justify-content-center mt-5 p-3`}
        >
          <div className="row mb-2">
            <div className=" col-xs-12 col-md-4 mb-2">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top rounded"
                alt="..."
              />
            </div>
            <div
              className={`${styles.movieInfo}  col-xs-12 col-md-8 d-flex flex-column justify-content-center align-items-center `}
            >
              <h2 className={`${styles.textDesign}`}>{movie.original_title}</h2>
              <h5 className={`${styles.textDesign}`}>
                fecha de estreno : {movie.release_date}
              </h5>
              <h4 className={`${styles.textDesign}`}>Genero:</h4>
              <ul>
                {movie.genres.map((genres) => (
                  <li className={`${styles.textDesign}`} key={genres.id}>
                    {genres.name}
                  </li>
                ))}
              </ul>
              <div
                className={` d-flex  w-100   justify-content-center h-25 ${styles.container}`}
              >
                <div className={`${styles.circularProgressBarContainer}`}>
                  <h3 className={`${styles.textDesign} text-center`}>
                    rating{" "}
                  </h3>
                  <CircularProgressBar
                    value={Math.round(movie.vote_average * 10)}
                    text={`${Math.round(movie.vote_average * 10)}`}
                  />
                </div>
                <div style={{ width: "8rem", height: "8rem" }}>
                  <h3 className={`${styles.textDesign} text-center`}>
                    Popularity{" "}
                  </h3>
                  <CircularProgressBar
                    value={Math.round(movie.popularity / 100)}
                    text={`${Math.round(movie.popularity / 100)}`}
                  />
                </div>
              </div>
              <p className={`${styles.textDesign} mt-5 `}>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
