import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const favoritesStore = (set) => ({
  movies: [],
  moviesLasted: [],
  moviesTopRated: [],
  moviesMostPopular: [],
  favoriteMovies: [],

  fetchMovies: async (url) => {
    const response = await axios.get(url);
    set({ movies: response.data.results });
  },
  fetchMoviesLasted: async (url) => {
    const response = await axios.get(url);
    set({ moviesLasted: response.data.results });
  },
  fetchMoviesTopRated: async (url) => {
    const response = await axios.get(url);
    set({ moviesTopRated: response.data.results });
  },
  fetchMoviesMostPopular: async (url) => {
    const response = await axios.get(url);
    set({ moviesPopular: response.data.results });
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
