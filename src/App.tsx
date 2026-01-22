import { useState } from "react";

import SearchPanel from "./Components/search-panel/SearchPanel";
import MovieList from "./Components/movie-list/MovieList";

// Vite template assets (these are the usual paths)
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

// Temporary movies so it compiles (replace with your real Movies later)
const Movies: any[] = [];

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <h1>Movie Collection</h1>
        <SearchPanel />
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
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>

      <MovieList movies={Movies} />
    </>
  );
}

export default App;
