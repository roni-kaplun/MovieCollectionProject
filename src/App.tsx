import { useState } from "react";
import MovieList from "./components/movie-list/MovieList";
import SearchPanel from "./components/search-panel/SearchPanel";
import TrendingTab from "./components/trending-movies/TrendingMovies";
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
        <TrendingTab/>
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
