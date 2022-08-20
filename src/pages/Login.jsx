import React from "react";

import styles from "./../styles/login.module.css";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { loginCredential } from "./../Credentials/loginCredentials";
import useStore from "./../zustand/stores/favoriteMovies";
import { useEffect } from "react";
const Login = () => {
  const fetchMovies = useStore((state) => state.fetchMovies);
  const fetchMoviesLasted = useStore((state) => state.fetchMoviesLasted);
  const fetchMoviesTopRated = useStore((state) => state.fetchMoviesTopRated);
  const fetchMoviesMostPopular = useStore(
    (state) => state.fetchMoviesMostPopular
  );
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      swal("falta rellenar los campos");
      return;
    }
    if (email !== "" && !regexEmail.test(email)) {
      console.log("rellanar bien el campo emails");
      return;
    }
    if (
      email !== loginCredential.username ||
      password !== loginCredential.password
    ) {
      console.log("credenciales invalidas");
      return;
    }

    if (
      email === loginCredential.username &&
      password === loginCredential.password
    ) {
      sessionStorage.setItem("token", loginCredential.token);
      navigate("/dashboard");
      console.log("acesso verificado");
    }
  };
  useEffect(() => {
    fetchMovies(import.meta.env.VITE_URL_LASTEST);
    fetchMoviesLasted(import.meta.env.VITE_URL_MOVIE);
    fetchMoviesTopRated(import.meta.env.VITE_URL_TOP_RATED);
    fetchMoviesMostPopular(import.meta.env.VITE_URL_MOST_POPULAR);
  });

  return (
    <form onSubmit={handlerSubmit} c>
      <div
        className="container vh-50 d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="row ">
          <div className="col-12 d-flex flex-column">
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className={`${styles.colorTextLabel} form-label`}
              >
                Email address:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className={`${styles.colorTextLabel} form-label`}
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
              />
            </div>

            <button
              type="submit"
              className={`${styles.submitButton} btn  btn-primary`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>

    // <div classNameName="h-100 d-flex flex-column align-items-center mt-5">
    //   <h1>Formulario</h1>
    //   <form onSubmit={handlerSubmit}>
    //     <input type="text" name="email" />
    //     <br />
    //     <input type="password" name="password" />
    //     <br />
    //     <button
    //       type="submit"
    //       classNameName="btn btn-block btn-primary mt-2 d justify-content-center"
    //     >
    //       enviar
    //     </button>
    //   </form>
    // </div>
  );
};

export default Login;
