import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../movie-card/MovieCard";
import "./MovieList.css";

// Movie type
type Movie = {
  id: string;
  title: string;
  year: number;
  coverUrl?: string;
};

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState<number | "">("");

  // Fetch movies from backend on mount
  useEffect(() => {
    axios
      .get<Movie[]>("http://localhost:3000/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error(err.message));
  }, []);

  // Add a new movie
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !year) return;

    axios
      .post<Movie>("http://localhost:3000/movies", { title, year: Number(year) })
      .then((res) => {
        setMovies((prev) => [...prev, res.data]);
        setTitle("");
        setYear("");
      })
      .catch((err) => console.error(err.message));
  };

  // Remove a movie
  const removeMovie = (id: string) => {
    axios
      .delete(`http://localhost:3000/movies/${id}`)
      .then(() => setMovies((prev) => prev.filter((m) => m.id !== id)))
      .catch((err) => console.error(err.message));
  };

  return (
    <div className="movie-list-container">
      {/* Add Movie Form */}
      <form onSubmit={handleAdd} className="add-movie-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(Number(e.target.value))}
          required
        />
        <button type="submit">Add Movie</button>
      </form>

      {/* Movie List */}
      <section className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            coverUrl={movie.coverUrl || "https://via.placeholder.com/150"} 
            onRemove={() => removeMovie(movie.id)}
          />
        ))}
      </section>
    </div>
  );
}