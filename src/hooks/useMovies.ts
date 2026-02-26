import { useEffect, useState } from "react";
import type { Movie } from "../types/movies";
import { movieService } from "../services/movieService";


export function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  function refresh() {
    setMovies(movieService.listMovies());
  }

  useEffect(() => {
    refresh();
  }, []);

  return { movies, refresh };
}