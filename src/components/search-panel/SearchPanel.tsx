type Props = {
  query: string;
  onQueryChange: (next: string) => void;
  filteredCount: number;
  totalCount: number;
};

export default function SearchPanel({
  query,
  onQueryChange,
  filteredCount,
  totalCount,
}: Props) {
  return (
    <section>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search title..."
      />
      <p>
        Showing {filteredCount} of {totalCount}
      </p>
    </section>
  );
}