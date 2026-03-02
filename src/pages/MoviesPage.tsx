import { useState } from "react";
import { useMovies } from "../hooks/useMovies";
import { movieService } from "../services/movieService";
import SearchPanel from "../Components/search-panel/SearchPanel";
import { useFavourites } from "../context/FavouritesContext";

/**
 * Sprint 3 - Architecture Usage
 *
 * This page uses the hook-service-repository structure.
 *
 * useMovies -> presentation logic
 * movieService -> business logic
 * repository -> data access
 *
 * Favourites are shared UI state using Context.
 */

export default function MoviesPage() {
  const { movies, refresh } = useMovies();
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();

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
      refresh();
    } else {
      alert(result.message || "Could not add movie.");
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

      <ul>
        {filtered.map((m) => (
          <li key={m.id} style={{ marginBottom: 8 }}>
            {m.title} ({m.year}){" "}
            {isFavourite(m.id) ? (
              <button onClick={() => removeFavourite(m.id)}>
                Remove Favourite
              </button>
            ) : (
              <button onClick={() => addFavourite(m.id)}>
                Add Favourite
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}