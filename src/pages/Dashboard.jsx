import React, { useEffect } from "react";

import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";
import Video from "./../Components/Video";
import Carousel from "../Components/Carousel";
const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  const state = useStore((state) => state);
  const moviesCat = Object.values(state).slice(0, 3);
  const movieTitle = Object.keys(state);
  let token = sessionStorage.getItem("token");
  console.log(movieTitle.slice(0, 3));
  useEffect(() => {}, [favorite]);

  return (
    <>
      {!token && <Navigate to="/" />}
      <Video />

      {moviesCat.map((mc) => (
        <Carousel mc={mc} />
      ))}

      {/*
      <Carousel title="This week Movies" />
      <Carousel title="Lasted Movies" />
      <Carousel title="Top Rated Movies" />
      <Carousel title="Most Popular Movies" /> */}
    </>
  );
};

export default Dashboard;
