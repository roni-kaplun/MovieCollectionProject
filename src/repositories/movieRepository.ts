import type { Movie } from "../types/movies";
import { moviesTestData } from "../testData/moviesTestData";


let movies: Movie[] = [...moviesTestData];

export const movieRepository = {
  getAll(): Movie[] {
    return [...movies];
  },

  getById(id: string): Movie | undefined {
    return movies.find((m) => m.id === id);
  },

  add(movie: Movie): void {
    movies = [movie, ...movies];
  },

  update(id: string, patch: Partial<Movie>): void {
    movies = movies.map((m) => (m.id === id ? { ...m, ...patch } : m));
  },

  remove(id: string): void {
    movies = movies.filter((m) => m.id !== id);
  },
};