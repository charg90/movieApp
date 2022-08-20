import React, { useEffect } from "react";

import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";
import Video from "./../Components/Video";
import Carousel from "../Components/Carousel";
const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  let token = sessionStorage.getItem("token");

  useEffect(() => {}, [favorite]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <Video />

      <Carousel title="This week Movies" />
      <Carousel title="Lasted Movies" />
      <Carousel title="Top Rated Movies" />
      <Carousel title="Most Popular Movies" />
    </>
  );
};

export default Dashboard;
