/**
 * Sprint 3 - Architecture Usage
 *
 * This page uses the hook-service-repository structure.
 *
 * The useMovies() hook handles presentation logic by loading
 * the movie data into state for this page.
 *
 * The hook calls movieService, which contains the business logic
 * for working with movies.
 *
 * The service then uses movieRepository for data access
 * (right now using test data).
 *
 * This keeps business logic and presentation logic separate
 * instead of putting everything in the component.
 */
import { useState } from "react";
import MovieList from "../Components/movie-list/MovieList";
import SearchPanel from "../Components/search-panel/SearchPanel";
import { useMovies } from "../hooks/useMovies";


 
export default function MoviesPage() {
  const { movies } = useMovies();

  const [query, setQuery] = useState("");
  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div>
      <h1>Movies</h1>

      <SearchPanel
        query={query}
        onQueryChange={setQuery}
        filteredCount={filtered.length}
        totalCount={movies.length}
      />

      <MovieList movies={filtered} />
    </div>
  );
}