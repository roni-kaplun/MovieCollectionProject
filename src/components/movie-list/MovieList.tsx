<<<<<<< HEAD
import "./MovieList.css";

function MovieList({movies}: {movies: {
    title: string;
    coverUrl: string;
}[]}) {
    return (
        <section className="movie-list">
            {movies.map(movie => <figure>
                <img src={movie.coverUrl} alt="Url for movie cover"></img> 
                <figcaption>{movie.title}</figcaption> 
            </figure>)}
        </section>
    );
};

export default MovieList;
=======
import MovieCard from "../movie-card/MovieCard";
import "./MovieList.css";

interface Movie {
  title: string;
  coverUrl: string;
}

interface MovieListProps {
  movies: Movie[];
  onRemove: (index: number) => void; 
}

export default function MovieList({ movies, onRemove }: MovieListProps) {
  return (
    <section className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.title}
          coverUrl={movie.coverUrl}
          onRemove={() => onRemove(index)}
        />
      ))}
    </section>
  );
}
>>>>>>> 7b88681 (Implemented My Movie Cards feature: list, search, and remove)
