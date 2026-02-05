import MovieList from "../components/movie-list/MovieList";
import SearchPanel from "../components/search-panel/SearchPanel";

export const movies = [
  {
    title: "Inception",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
  },
  {
    title: "Interstellar",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
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
