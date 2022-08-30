import { useEffect } from "react";
//fireBase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../DB/fireBase";
//react router dom
import { useNavigate } from "react-router-dom";
//sweet alert
import swal from "sweetalert";
//zustand
import useStore from "./../zustand/stores/favoriteMovies";
import profileStore from "./../zustand/stores/user";
//css
import styles from "./../styles/login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const { profileUser, setProfile } = profileStore();
  const fetchMovies = useStore((state) => state.fetchMovies);
  const fetchMoviesLasted = useStore((state) => state.fetchMoviesLasted);
  const fetchMoviesTopRated = useStore((state) => state.fetchMoviesTopRated);
  const fetchMoviesMostPopular = useStore(
    (state) => state.fetchMoviesMostPopular
  );

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        e.target.email.value,
        e.target.password.value
      );

      setProfile(auth.currentUser.email);
      localStorage.setItem("token", auth.currentUser.accessToken);
      fetchMovies(import.meta.env.VITE_URL_MOVIE);
      fetchMoviesLasted(import.meta.env.VITE_URL_LASTEST);
      fetchMoviesTopRated(import.meta.env.VITE_URL_TOP_RATED);
      fetchMoviesMostPopular(import.meta.env.VITE_URL_MOST_POPULAR);
      console.log("todobien");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

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
  );
};

export default Login;
