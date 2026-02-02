import MovieList from "../components/movie-list/MovieList";
import SearchPanel from "../components/search-panel/SearchPanel";

export const movies = [
  {
    title: "Inception",
    coverUrl: "https://via.placeholder.com/150",
  },
  {
    title: "Interstellar",
    coverUrl: "https://via.placeholder.com/150",
  },
];

export default function MoviesPage() {
  return (
    <div>
      <h1>Movies</h1>
      <SearchPanel />
      <MovieList movies={movies} />
    </div>
  );
}
