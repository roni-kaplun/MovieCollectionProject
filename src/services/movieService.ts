import type { Movie } from "../types/movies";
import { movieRepository } from "../repositories/movieRepository";



export const movieService = {
  listMovies(): Movie[] {
    return movieRepository.getAll();
  },

  
  findByTitle(title: string): Movie | undefined {
    const t = title.trim().toLowerCase();
    if (!t) return undefined;

    return movieRepository.getAll().find((m) => m.title.toLowerCase() === t);
  },

  
  addMovie(movie: Movie): { ok: boolean; message?: string } {
    const existing = movieRepository
      .getAll()
      .some((m) => m.title.toLowerCase() === movie.title.toLowerCase());

    if (existing) return { ok: false, message: "Movie title already exists." };

    movieRepository.add(movie);
    return { ok: true };
  },
};