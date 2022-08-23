import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const favoritesStore = (set) => ({
  ThisWeekMovies: [],
  LastMovies: [],
  TopRatedMovies: [],
  MostPopularMovies: [],
  favoriteMovies: [],

  fetchMovies: async (url) => {
    try {
      const response = await axios.get(url);
      set({ ThisWeekMovies: response.data.results });
    } catch (err) {
      console.log(err);
    }
  },
  fetchMoviesLasted: async (url) => {
    try {
      const response = await axios.get(url);
      set({ LastMovies: response.data.results });
    } catch (err) {
      console.log(err);
    }
  },
  fetchMoviesTopRated: async (url) => {
    try {
      const response = await axios.get(url);
      set({ TopRatedMovies: response.data.results });
    } catch (err) {
      console.log(err);
    }
  },
  fetchMoviesMostPopular: async (url) => {
    try {
      const response = await axios.get(url);
      set({ MostPopularMovies: response.data.results });
    } catch (error) {
      console.log("most popular", error);
    }
  },

  addFavorite: (movie) => {
    set((state) => ({
      favoriteMovies: [...state.favoriteMovies, movie],
    }));
  },
  deleteMovie: (id) => {
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((f) => f.id !== id),
    }));
  },
});

const useStore = create(devtools(favoritesStore));

export default useStore;
