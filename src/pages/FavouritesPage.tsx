/**
 * Sprint 3 - Architecture Usage
 *
 * This component follows the hook-service-repository structure.
 *
 * The useMovies() hook handles presentation logic by loading movie data
 * into React state and keeping that state separate from the UI.
 *
 * The movieService is used here for business logic, such as checking
 * whether a movie exists before adding it to favourites.
 *
 * The movieService calls the movieRepository, which is responsible
 * for data access (currently using test data).
 *
 * This keeps presentation logic, business logic, and data access
 * separated as required in this sprint.
 */
import { useState, type FormEvent } from "react";
import { useMovies } from "../hooks/useMovies";
import { movieService } from "../services/movieService";


export default function FavouritesPage() {
  const { movies } = useMovies();

  const [favourites, setFavourites] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState<string>("");

  function addFavourite(e: FormEvent) {
    e.preventDefault();
    setMessage("");

    const found = movieService.findByTitle(input);
    if (!found) {
      setMessage("Movie not found (exact title match).");
      return;
    }

    const check = movieService.canAddToFavourites(favourites, found.id);
    if (!check.ok) {
      setMessage(check.message || "Cannot add favourite.");
      return;
    }

    setFavourites([found.id, ...favourites]);
    setInput("");
    setMessage("Added.");
  }

  const favouriteMovies = movies.filter((m) => favourites.includes(m.id));

  return (
    <div>
      <h1>Favourites</h1>

      <form onSubmit={addFavourite}>
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
                onClick={() => setFavourites(favourites.filter((id) => id !== m.id))}
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