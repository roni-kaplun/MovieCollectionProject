import "./MovieList.css";

export type Movie = {
  id: string;
  title: string;
  coverUrl: string;
  buttonLabel?: string;
  buttonOnClick?: () => void;
};

function MovieList({ movies }: { movies: Movie[] }) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <figure key={movie.id}>
          <img src={movie.coverUrl} alt={`Cover of ${movie.title}`} />
          <figcaption>{movie.title}</figcaption>

          {movie.buttonLabel && movie.buttonOnClick && (
            <button onClick={movie.buttonOnClick}>
              {movie.buttonLabel}
            </button>
          )}
        </figure>
      ))}
    </section>
  );
}

export default MovieList;
