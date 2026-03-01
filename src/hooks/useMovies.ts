import { useState, useEffect } from "react";
import type { Movie } from "../types/Movie";
import { MovieRepository } from "../repositories/MovieRepository";
import { MovieService } from "../services/MovieService";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // Load all movies initially
  useEffect(() => {
    setMovies(MovieRepository.getAll());
  }, []);

  // Toggle watched status using service
  const toggleWatched = (id: number) => {
    const movie = MovieRepository.getById(id);
    if (movie) {
      MovieService.toggleWatched(movie); // <-- use service
      setMovies([...MovieRepository.getAll()]);
    }
  };

  // Remove movie using service
  const removeMovie = (id: number) => {
    MovieService.removeMovie(id); // <-- use service
    setMovies([...MovieRepository.getAll()]);
  };

  // Count watched movies (optional, can be used in component)
  const countWatched = MovieService.countWatched(movies);

  return { movies, toggleWatched, removeMovie, countWatched };
};