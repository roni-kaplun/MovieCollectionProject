import type { Movie } from "../types/movies";
import { movieRepository } from "../repositories/movieRepository";


export const movieService = {
  
  listMovies(): Movie[] {
    return movieRepository.getAll();
  },

  // Business logic: find movie by exact title
  findByTitle(title: string): Movie | undefined {
    const t = title.trim().toLowerCase();
    if (!t) return undefined;

    return movieRepository
      .getAll()
      .find((m) => m.title.toLowerCase() === t);
  },

  // Business logic: prevent duplicate movie titles when adding
  addMovie(movie: Movie): { ok: boolean; message?: string } {
    const existing = movieRepository
      .getAll()
      .some((m) => m.title.toLowerCase() === movie.title.toLowerCase());

    if (existing) {
      return { ok: false, message: "Movie title already exists." };
    }

    movieRepository.add(movie);
    return { ok: true };
  },

  // Business logic: prevent duplicate favourites
  canAddToFavourites(
    favouriteIds: string[],
    movieId: string
  ): { ok: boolean; message?: string } {
    if (favouriteIds.includes(movieId)) {
      return { ok: false, message: "Already in favourites." };
    }

    return { ok: true };
  },
};