import create from "zustand";
import { devtools } from "zustand/middleware";

const favoritesStore = (set) => ({
  favoriteMovies: [],

  addFavorite: (movie) => {
    console.log(movie.id);
    set((state) => ({
      favoriteMovies: [...state.favoriteMovies, movie],
    }));
  },
  deleteMovie: (id) => {
    console.log("ssds", id);
    set((state) => ({
      favoriteMovies: state.favoriteMovies.filter((f) => f.id !== id),
    }));
  },
});

const useStore = create(devtools(favoritesStore));

export default useStore;

// addFavorite: (movie) =>
// set((state) => (
//   { favoriteMovies: [...state.favoriteMovies, movie] }

//   )),
