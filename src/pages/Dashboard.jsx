import React, { useEffect } from "react";
import useStore from "./../zustand/stores/favoriteMovies";
import { Navigate } from "react-router-dom";
import Video from "./../Components/Video";
import Carousel from "../Components/Carousel";
import styles from "./../styles/dashboard.module.css";
const Dashboard = () => {
  const favorite = useStore((state) => state.favoriteMovies);
  const state = useStore((state) => state);
  const moviesCat = Object.entries(state).slice(0, 4);

  let token = sessionStorage.getItem("token");

  useEffect(() => {}, [favorite]);

  return (
    <div className="container-fluid">
      {!token && <Navigate to="/" />}
      <Video />

      {moviesCat.map((mc) => (
        <>
          <p className={`${styles.titleText} text-white`}>
            {mc[0].split(/(?=[A-Z])/).join(" ")}
          </p>

          <Carousel mc={mc} />
        </>
      ))}
    </div>
  );
};

export default Dashboard;
