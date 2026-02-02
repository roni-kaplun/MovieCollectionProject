import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SearchPanel from "./components/search-panel/SearchPanel";
import MovieList from "./components/movie-list/MovieList";
import TrendingTab from "./components/trending-movies/TrendingMovies";
import { movies } from "./pages/MoviesPage";
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>

      <div>
        <h1>Movie Collection</h1>
        <SearchPanel />
        <MovieList movies={movies} />
        <TrendingTab />
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}