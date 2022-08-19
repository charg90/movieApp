import axios from "axios";
import { useEffect, useState } from "react";

const useGetMovies = (url) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false), setMovies(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return [movies, loading];
};

export default useGetMovies;
