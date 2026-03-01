import { useMovies } from "../../hooks/useMovies";
import { MovieService } from "../../services/MovieService";
import "./MovieCard.css";

export const MovieCards = () => {
  const { movies, toggleWatched, removeMovie } = useMovies();

  return (
    <div>
      <h2>My Movie Collection</h2>
      <p>Watched movies: {MovieService.countWatched(movies)}</p>
      <p>Average rating: {MovieService.averageRating(movies).toFixed(1)}</p>
      <div className="movie-cards-container">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <img src={movie.coverUrl} alt={movie.title} className="movie-cover" />
            <h3>{movie.title}</h3>
            <p>{movie.year} | {movie.genre}</p>
            <p>Rating: {movie.rating}/10</p>
            <label>
              Watched: 
              <input
                type="checkbox"
                checked={movie.watched}
                onChange={() => toggleWatched(movie.id)}
              />
            </label>
            <button className="remove-btn" onClick={() => removeMovie(movie.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};