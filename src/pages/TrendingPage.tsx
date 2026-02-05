import { useState } from "react";
import TrendingTab from "../components/trending-movies/TrendingMovies";
import type { Movie } from "../components/movie-list/MovieList";

export default function TrendingPage() {
  const [interestedMovies, setInterestedMovies] = useState<Movie[]>([]);

  function handleInterested(movie: Movie) {
    setInterestedMovies((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  }

  function handleRemove(movieId: string) {
  setInterestedMovies((prev) =>
    prev.filter((movie) => movie.id !== movieId)
  );
}


  return (
    <div>
      <h1>Trending Movies</h1>
      <TrendingTab onInterested={handleInterested} />

      <h2>Interested Movies</h2>

      <section className="movie-list">
        {interestedMovies.map((movie) => (
          <figure key={movie.id}>
            <img src={movie.coverUrl} alt={movie.title} />
            <figcaption>{movie.title}</figcaption>

            <button onClick={() => handleRemove(movie.id)}>
              Remove
            </button>
          </figure>
        ))}
      </section>

    
  
    </div>
  );
}
