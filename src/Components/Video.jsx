import React, { useEffect, useState } from "react";
import axios from "axios";
import useStore from "./../zustand/stores/favoriteMovies";

const Video = () => {
  const [key, setKey] = useState(null);
  const movieList = useStore((state) => state.ThisWeekMovies);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieList[0].id}/videos?api_key=ef914df2994fae559350d18795448351&language=en-US`
      )
      .then((response) => setKey(response.data.results[3].key));
  }, [key]);

  return (
    <div className="row mb-3">
      <div className="col-12">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
            allow="autoplay"
            width="100%"
            height="700rem"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
