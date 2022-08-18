import React, { useEffect } from "react";
import useVideo from "./../Components/Video";
import Video from "./../Components/Video";
import Card from "../Components/Cards";
import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  const movieList = useStore((state) => state.movies);

  let token = sessionStorage.getItem("token");

  useEffect(() => {}, [favorite]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="container">
        <Video />
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
