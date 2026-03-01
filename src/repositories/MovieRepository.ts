import type { Movie } from "../types/Movie";
import testMovies from "../data/testMovies";

export const MovieRepository = {
  getAll: (): Movie[] => testMovies,
  getById: (id: number): Movie | undefined => testMovies.find(m => m.id === id),
  add: (movie: Movie): void => { testMovies.push(movie); },
  update: (movie: Movie): void => {
    const index = testMovies.findIndex(m => m.id === movie.id);
    if (index !== -1) testMovies[index] = movie;
  },
  delete: (id: number): void => {
    const index = testMovies.findIndex(m => m.id === id);
    if (index !== -1) testMovies.splice(index, 1);
  }
};