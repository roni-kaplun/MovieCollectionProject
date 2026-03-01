import type { Movie } from "../types/Movie";

export const MovieService = {
  countWatched: (movies: Movie[]): number => movies.filter(m => m.watched).length,
  averageRating: (movies: Movie[]): number => {
    if (!movies.length) return 0;
    return movies.reduce((sum, m) => sum + m.rating, 0) / movies.length;
  }
};