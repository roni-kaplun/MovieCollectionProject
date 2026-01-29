import MovieList from "../Components/movie-list/MovieList";
import SearchPanel from "../Components/search-panel/SearchPanel";

const movies = [
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
