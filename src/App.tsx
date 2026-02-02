import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import FavouritesPage from "./pages/FavouritesPage";

const Movies: { coverUrl: string; title: string }[] = [
  {
    coverUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg",
    title: "Avengers Endgame",
  },
  {
    coverUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg",
    title: "Avengers Endgame",
  },
  // Add more movies here safely
];

export default function App() {
  const links = [
    { label: "Home", url: "/" },
    { label: "Movies", url: "/movies" },
    { label: "Favorites", url: "/favorites"}
  ];

  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar links={links} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/favorites" element={<FavouritesPage movies={Movies} />} />
      </Routes>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  ); 
}
