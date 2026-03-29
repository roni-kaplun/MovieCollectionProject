import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/movie-list/MovieList";
import SearchPanel from "./components/search-panel/SearchPanel";
import MovieCard from "./components/movie-card/MovieCard";

// Sample movies
const Movies = [
  {
    title: "Avengers Endgame",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
  },
  {
    title: "Interstellar",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
  },
  {
    title: "Inception",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg",
  },
];

function HomePage() {
  const [myMovies, setMyMovies] = useState(Movies);
  const [searchTerm, setSearchTerm] = useState("");

  const removeMovie = (index: number) => {
    setMyMovies(myMovies.filter((_, i) => i !== index));
  };

  const filteredMovies = myMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Movie Collection</h1>

      <SearchPanel query={searchTerm} setQuery={setSearchTerm} />

      <MovieList movies={filteredMovies} onRemove={removeMovie} />

      <h2>My Movie Cards</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {filteredMovies.map((movie, index) => (
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

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#eee", marginBottom: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}