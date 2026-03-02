import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavigationBar from "./Components/navigation-bar/NavigationBar";
import FavouritesPage from "./pages/FavouritesPage";

export default function App() {
  const links = [
    { label: "Home", url: "/" },
    { label: "Movies", url: "/movies" },
    { label: "Favorites", url: "/favorites" }
  ];

  return (
    <>
      <NavigationBar links={links} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/favorites" element={<FavouritesPage />} />
      </Routes>
    </>
  );
}