import FavouritesPage from "./pages/FavouritesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import NavigationBar from "./Components/navigation-bar/NavigationBar";

export default function App() {
  const Links = [
  { label: "Home", url: "/" },
  { label: "Movies", url: "/movies" },
  { label: "Favourites", url: "/favorites" },
];


  const [count, setCount] = useState(0);

  return (<>
      <NavigationBar links={Links}/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/favorites" element={<FavouritesPage movies={[]} />} />

      </Routes>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      </>
  );
}
