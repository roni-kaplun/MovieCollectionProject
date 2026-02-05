import MovieList from "../components/movie-list/MovieList";
import { movies } from "./MoviesPage";

export default function TrendingPage() {
  return (
    <div>
      <h1>Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}
