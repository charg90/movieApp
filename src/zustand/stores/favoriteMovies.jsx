import create from "zustand";
import axios from "axios";
import { devtools } from "zustand/middleware";

const favoritesStore = (set) => ({
  movies: [],
  favoriteMovies: [],

  fetchMovies: async (url) => {
    const response = await axios.get(url);
    set({ movies: response.data.results });
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
