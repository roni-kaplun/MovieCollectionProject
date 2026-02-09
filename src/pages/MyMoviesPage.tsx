import { useState } from "react";
import MovieCard from "../components/movie-card/MovieCard";

const initialMovies = [
  {
    title: "Avengers Endgame",
    coverUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg",
  },
  {
    title: "Inception",
    coverUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F51x4H4bFYzL._AC_.jpg",
  },
  {
    title: "Interstellar",
    coverUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F91kFYg4fX3L._SL1500_.jpg",
  },
];

export default function MyMoviesPage() {
  const [movies, setMovies] = useState(initialMovies);

  function removeMovie(index: number) {
    setMovies(movies.filter((_, i) => i !== index));
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>My Movie Cards</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            coverUrl={movie.coverUrl}
            onRemove={() => removeMovie(index)}
          />
        ))}
      </div>
    </div>
  );
}
