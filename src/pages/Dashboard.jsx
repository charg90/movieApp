import React, { useEffect } from "react";

import Card from "../Components/Cards";
import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";
import Video from "./../Components/Video";
import Carousel from "../Components/Carousel";
const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  const movieList = useStore((state) => state.movies);

  let token = sessionStorage.getItem("token");

  useEffect(() => {}, [favorite]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <Video />
      <div>
        <p className="text-white">Movies of the week</p>
      </div>
      <Carousel url={import.meta.env.VITE_URL_MOVIE} />
      <div>
        <p className="text-white">Last movies</p>
      </div>
      <Carousel url={import.meta.env.VITE_URL_LASTEST} />
      <div>
        <p className="text-white">Top rated movies</p>
      </div>
      <Carousel url={import.meta.env.VITE_URL_TOP_RATED} />
      <div>
        <p className="text-white">Most Popular</p>
      </div>
      <Carousel url={import.meta.env.VITE_URL_MOST_POPULAR} />
      <div className="container">
        <div className="row">
          {movieList.map((movie) => (
            <Card key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
