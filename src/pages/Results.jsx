import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import styles from "./../styles/results.module.css";

const Results = () => {
  const params = useParams();
  const nameMovie = params.movie;

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=82e823d00c7615bf7612c317a10e3511&language=es-ES&query=${nameMovie}`;
    axios
      .get(endPoint)
      .then((response) => {
        const movies = response.data.results;

        movies.length === 0 && swal("no se  ha encontrado la pelicula");

        setMovie(movies);
      })
      .catch((err) => console.log(err));
  }, [nameMovie]);
  return (
    <>
      {movie.length === 0 && <p>no hay resultados</p>}
      <div className=" container">
        <div className="row">
          {movie.map((m) => {
            return (
              <div className="col-6 col-md-4 col-lg-3 d-flex" key={m.id}>
                <div className={`${styles.cardBody} card my-3 p-2 rounded`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                    className="card-img-top h-100"
                    alt="..."
                  />
                  <div className={` card-body `}>
                    <h5 className={`${styles.cardTextDesign} card-title`}>
                      {m.title}
                    </h5>
                    <h5 className={`${styles.cardTextDesign} card-text`}>
                      Estreno:{m.release_date}
                    </h5>

                    <p className={`${styles.cardTextDesign} card-text`}></p>
                    <Link
                      to={`/movie?movieID=${m.id}`}
                      className={`${styles.btnCardBtn} btn btn-primary d-flex justify-content-center`}
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Results;
