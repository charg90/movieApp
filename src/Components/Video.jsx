import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "./../zustand/stores/favoriteMovies";

const Video = () => {
  const [key, setKey] = useState(null);
  const movieList = useStore((state) => state.movies);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieList[0].id}/videos?api_key=ef914df2994fae559350d18795448351&language=en-US`
      )
      .then((response) => setKey(response.data.results[0].key));
  });

  return (
    <div className="row">
      <div className="col">
        <div className="embed-responsive embed-responsive-16by9">
          <p>{key}</p>
          <video
            className="embed-responsive-item"
            src={`https://www.youtube.com/watch?v=${key}`}
            allowFullScreen
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Video;
