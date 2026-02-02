import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import FavouritesForm from "../Components/favourites-form/FavouritesForm";

type Movie = {
  coverUrl: string;
  title: string;
};

type Props = {
  movies: Movie[];
};

export default function FavouritesPage({ movies }: Props) {
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleAddFavourite(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!input.trim()) {
      setError("Please enter a movie title.");
      return;
    }

    const movie = movies.find(
      (m) => m.title.toLowerCase() === input.toLowerCase()
    );

    if (!movie) {
      setError("Movie not found.");
      return;
    }

    if (favourites.some((f) => f.title === movie.title)) {
      setError("Movie already in favourites.");
      return;
    }

    setFavourites([...favourites, movie]);
    setInput("");
  }

  function handleRemoveFavourite(title: string) {
    setFavourites(favourites.filter((m) => m.title !== title));
  }

  return (
    <div>
    <h1>Favourites</h1>
    <p>
     <Link to="/">← Back to Home</Link>
    </p>
      <FavouritesForm
        input={input}
        setInput={setInput}
        error={error}
        setError={setError}
        onAdd={handleAddFavourite}
/>


      <ul>
        {favourites.map((movie) => (
          <li key={movie.title}>
            {movie.title}
            <button onClick={() => handleRemoveFavourite(movie.title)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
