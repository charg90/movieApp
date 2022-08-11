import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Results = () => {
  const params = useParams();
  const nameMovie = params.movie;

  const [movie, setMovie] = useState([]);

  console.log(params.movie);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=82e823d00c7615bf7612c317a10e3511&language=es-ES&query=${nameMovie}`;
    axios
      .get(endPoint)
      .then((response) => {
        const movies = response.data.results;
        console.log(movies);
        movies.length === 0 && swal("no se  ha encontrado la pelicula");

        setMovie(movies);
      })
      .catch((err) => console.log(err));
  }, [nameMovie]);
  return (
    <>
      {movie.length === 0 && <p>no hay resultados</p>}
      <div className="row">
        {movie.map((m) => {
          return (
            <div className="col-3 d-flex" key={m.id}>
              <div className="card my-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{m.title}</h5>
                  <h5 className="card-title">Estreno:{m.release_date}</h5>
                  <h5 className="card-title">Puntaje:{m.vote_average}</h5>
                  <p className="card-text"></p>
                  <Link
                    to={`/movie?movieID=${m.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Results;
