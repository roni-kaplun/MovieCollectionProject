import { useState } from "react";
<<<<<<< HEAD
import MovieList from "./Components/movie-list/MovieList";
import SearchPanel from "./components/search-panel/SearchPanel";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Movies: {
    coverUrl: string;
    title: string;
}[] = [
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"},
    {coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df", title: "Avengers Endgame"}
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Movie Collection</h1>
        <SearchPanel />
        <MovieList movies={Movies} />
      </div>

      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MovieList from "./components/movie-list/MovieList";
import SearchPanel from "./components/search-panel/SearchPanel";
import MyMoviesPage from "./pages/MyMoviesPage";
import MovieCard from "./components/movie-card/MovieCard";

const Movies = [
  { title: "Avengers Endgame", coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg" },
  { title: "Interstellar", coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg" },
  { title: "Inception", coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81+Nup8-8NL._SL1500_.jpg" },
];

function MainApp() {
  const [myMovies, setMyMovies] = useState(Movies);
  const [searchTerm, setSearchTerm] = useState("");

  const removeMovie = (index: number) => {
    setMyMovies(myMovies.filter((_, i) => i !== index));
  };

  const filteredMovies = myMovies.filter(movie =>
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
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/my-movies">My Movie Cards</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/my-movies" element={<MyMoviesPage />} />
      </Routes>
    </Router>
  );
}
>>>>>>> 7b88681 (Implemented My Movie Cards feature: list, search, and remove)
