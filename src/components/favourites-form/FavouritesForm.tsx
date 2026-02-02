import type { FormEvent } from "react";

type Props = {
  input: string;
  setInput: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  onAdd: (e: FormEvent) => void;
};

export default function FavouritesForm({
  input,
  setInput,
  error,
  setError,
  onAdd,
}: Props) {
  return (
    <div>
      <form onSubmit={onAdd}>
        <label htmlFor="movie-title">Movie title</label>
        <input
          id="movie-title"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError("");
          }}
        />
        <button type="submit">Add</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
