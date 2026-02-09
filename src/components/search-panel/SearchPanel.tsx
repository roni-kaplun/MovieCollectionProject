<<<<<<< HEAD
import { useState } from "react";

type Item = {
  id: string;
  title: string;
  year: number;
};

export default function SearchPanel() {
  const [query, setQuery] = useState("");

  const items: Item[] = [
=======
type SearchPanelProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchPanel({ query, setQuery }: SearchPanelProps) {
  const items = [
>>>>>>> 7b88681 (Implemented My Movie Cards feature: list, search, and remove)
    { id: "1", title: "Inception", year: 2010 },
    { id: "2", title: "Interstellar", year: 2014 },
    { id: "3", title: "The Matrix", year: 1999 },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="search-panel">
      <h2>Search</h2>

      <label htmlFor="search-input">Movie title</label>

      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type a title..."
      />

      <p>
        Showing {filteredItems.length} of {items.length}
      </p>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.title} ({item.year})
          </li>
        ))}
      </ul>
    </section>
  );
}
