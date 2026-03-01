import type { Movie } from "../types/Movie";
import { MovieRepository } from "../repositories/MovieRepository";

export const MovieService = {
  // Count how many movies are watched
  countWatched: (movies: Movie[]): number => {
    return movies.filter((m) => m.watched).length;
  },

  // Calculate average rating of movies
  averageRating: (movies: Movie[]): number => {
    if (!movies.length) return 0;
    const total = movies.reduce((sum, m) => sum + (m.rating || 0), 0);
    return total / movies.length;
  },

  // Remove a movie by id
  removeMovie: (id: number): void => {
    MovieRepository.delete(id);
  },

  // Toggle watched status
  toggleWatched: (movie: Movie): void => {
    movie.watched = !movie.watched;
    MovieRepository.update(movie);
  },
};