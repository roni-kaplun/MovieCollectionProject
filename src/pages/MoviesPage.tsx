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
import { movieService } from "../services/movieService";

export default function MoviesPage() {
  const { movies, refresh } = useMovies();

  const [query, setQuery] = useState("");

  const filtered = movies.filter((m) =>
    m.title.toLowerCase().includes(query.trim().toLowerCase())
  );

  function addTestMovie() {
    const result = movieService.addMovie({
      id: "m" + Date.now(),
      title: "Test Movie " + Math.floor(Math.random() * 100),
      year: 2024,
      coverUrl: "https://via.placeholder.com/150?text=New+Movie",
    });

    if (result.ok) {
      refresh(); // reload movies from repository
    } else {
      alert(result.message);
    }
  }

  return (
    <div>
      <h1>Movies</h1>

      <button onClick={addTestMovie}>
        Add Test Movie
      </button>

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