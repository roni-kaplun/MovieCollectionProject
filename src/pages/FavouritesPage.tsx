/**
 * Sprint 3 - Architecture Usage
 *
 * This component follows the hook-service-repository structure.
 *
 * useMovies() handles presentation logic by loading movie data.
 *
 * movieService contains business logic (like validating movie titles).
 *
 * Favourites are shared UI state using Context instead of prop drilling.
 */

import { useState, type FormEvent } from "react";
import { useMovies } from "../hooks/useMovies";
import { movieService } from "../services/movieService";
import { useFavourites } from "../context/FavouritesContext";

export default function FavouritesPage() {
  const { movies } = useMovies();
  const { favouriteIds, addFavourite, removeFavourite } = useFavourites();

  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string>("");

  function handleAddByTitle(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    const found = movieService.findByTitle(input);
    if (!found) {
      setMessage("Movie not found (exact title match).");
      return;
    }

    addFavourite(found.id);
    setInput("");
    setMessage("Added.");
  }

  const favouriteMovies = movies.filter((m) =>
    favouriteIds.includes(m.id)
  );

  return (
    <div>
      <h1>Favourites</h1>

      <form onSubmit={handleAddByTitle}>
        <label htmlFor="favInput">Add by exact title</label>
        <input
          id="favInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {message && <p>{message}</p>}

      <h2>Your favourites</h2>

      {favouriteMovies.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <ul>
          {favouriteMovies.map((m) => (
            <li key={m.id}>
              {m.title} ({m.year})
              <button
                type="button"
                onClick={() => removeFavourite(m.id)}
                style={{ marginLeft: 8 }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}