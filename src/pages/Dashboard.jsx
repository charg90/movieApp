import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./styles.css";

const Dashboard = ({ addOrRemoveFromFavs }) => {
  // `https://api.themoviedb.org/3/find/${movie.id}?api_key=ef914df2994fae559350d18795448351&language=en-US`
  const [movieList, setMovieList] = useState([]);
  let token = sessionStorage.getItem("token");

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=ef914df2994fae559350d18795448351&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios
      .get(endPoint)
      .then((response) => setMovieList(response.data.results))
      .catch((e) => {
        swal(<h2>Hubo errores,intente mas tarde</h2>);
      });
  }, [setMovieList]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="container">
        <div className="row">
          {movieList.map((movie) => {
            return (
              <div className="col-3 d-flex" key={movie.id}>
                <div className="card my-3">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">
                      {movie.overview.substring(0, 100)}...
                    </p>
                    <Link
                      to={`/movie?movieID=${movie.id}`}
                      className="btn btn-primary"
                    >
                      View Detail
                    </Link>
                  </div>
                  <button
                    className="favorite-btn"
                    onClick={addOrRemoveFromFavs}
                    data-movie-id={movie.id}
                  >
                    🖤
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
