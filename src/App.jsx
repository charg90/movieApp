import { Routes, Route } from "react-router-dom";
//Components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Movie from "./pages/Movie";
import Results from "./pages/Results";

function App() {
  const favMovies = localStorage.getItem("favs");
  let tempMoviesInFavs;

  if (favMovies === null) {
    tempMoviesInFavs = [];
  } else {
    tempMoviesInFavs = JSON.parse(favMovies);
  }
  console.log(tempMoviesInFavs);
  // componente encargado de recibir los datos de dashboard y los almancena en localStorage
  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overview = parent.querySelector("p").innerText;
    //setea un objeto con los datos sacados de dashboard
    const moviesData = {
      imgURL,
      title,
      overview,
      id: btn.dataset.movieId,
    };
    //verifica que no haya peliculas repetidas y agrega a local storage
    let movieIsInArray = tempMoviesInFavs.find(
      (oneMovie) => oneMovie.id === moviesData.id
    );
    if (!movieIsInArray) {
      tempMoviesInFavs.push(moviesData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      console.log("se agrego la pelicula");
    } else {
      let moviesLeft = tempMoviesInFavs.filter(
        (oneMovie) => oneMovie.id !== moviesData.id
      );
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      console.log("se elimino la pelicula");
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={<Dashboard addOrRemoveFromFavs={addOrRemoveFromFavs} />}
      />
      <Route path="/movie" element={<Movie />} />
      <Route path="/movie/:movie" element={<Results />} />
    </Routes>
  );
}

export default App;
