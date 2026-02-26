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
import { useMovies } from "../hooks/useMovies";
import { movieService } from "../services/movieService";
import MovieList from "../components/movie-list/MovieList";
import SearchPanel from "../components/search-panel/SearchPanel";

export const movies = [
  {
    title: "Inception",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
  },
  {
    title: "Interstellar",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
  },
];

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