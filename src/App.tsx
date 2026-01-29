import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

export default function App() {
  return (
    <div>
      {/* Simple navigation for T.1 */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/movies">Movies</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}
