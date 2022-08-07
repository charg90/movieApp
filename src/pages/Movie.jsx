import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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

      <div>Movie Details</div>
      {!movie && <p>cargando...</p>}
      {movie && (
        <div
          className="container d-flex align-items-center"
          style={{ height: "80vh" }}
        >
          <div className="row">
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="col-8">
              <h5>Titulo: {movie.original_title}</h5>
              <h5>fecha de estreno : {movie.release_date}</h5>
              <h5>Genero:</h5>
              <ul>
                {movie.genres.map((genres) => (
                  <li key={genres.id}>{genres.name}</li>
                ))}
              </ul>
              <h5>rating :{movie.vote_average}</h5>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
