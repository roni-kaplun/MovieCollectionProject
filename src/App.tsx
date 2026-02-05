import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import TrendingPage from "./pages/TrendingPage";
import FavouritesPage from "./pages/FavouritesPage";
import NavigationBar from "./components/navigation-bar/NavigationBar";

const movies = [
  {
    title: "Avengers Endgame",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
  },
  {
    title: "Inception",
    coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df",
  },
];

export default function App() {
  const links = [
    { label: "Home", url: "/" },
    { label: "Movies", url: "/movies" },
    { label: "Favorites", url: "/favorites" },
    { label: "Trending", url: "/trending" },
  ];

  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar links={links} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/favorites" element={<FavouritesPage movies={movies} />} />
        <Route path="/trending" element={<TrendingPage/>} />
      </Routes>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      </div>
    </>
  );
}
