import { useState, useEffect } from "react";
import type { Movie } from "../types/Movie";
import { MovieRepository } from "../repositories/MovieRepository";

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies(MovieRepository.getAll());
  }, []);

  const toggleWatched = (id: number) => {
    const movie = MovieRepository.getById(id);
    if (movie) {
      movie.watched = !movie.watched;
      MovieRepository.update(movie);
      setMovies([...MovieRepository.getAll()]);
    }
  };

  const removeMovie = (id: number) => {
    MovieRepository.delete(id);
    setMovies([...MovieRepository.getAll()]);
  };

  return { movies, toggleWatched, removeMovie };
};