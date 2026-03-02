import { useMemo, useState } from "react";
import type { Movie } from "../types/movies";

/**
 * useMovieSearch
 * Handles presentation logic for searching movies.
 */
export function useMovieSearch(movies: Movie[]) {
  const [query, setQuery] = useState("");

  const filteredMovies = useMemo(() => {
    return movies.filter((m) =>
      m.title.toLowerCase().includes(query.trim().toLowerCase())
    );
  }, [movies, query]);

  return { query, setQuery, filteredMovies };
}