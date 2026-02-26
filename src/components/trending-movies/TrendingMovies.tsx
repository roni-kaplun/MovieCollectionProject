import MovieList from "../movie-list/MovieList";
import type { Movie } from "../movie-list/MovieList";

type Props = {
  onInterested: (movie: Movie) => void;
};

export default function TrendingTab({ onInterested }: Props) {
  const movies: Movie[] = [
    {
      id: "1",
      title: "The Rip",
      coverUrl: "https://external-content.duckduckgo.com/iu/?u=https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg",
    },
    {
      id: "2",
      title: "28 Years Later",
      coverUrl: "https://external-content.duckduckgo.com/iu/?u=https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg",
    },
    {
      id: "3",
      title: "Zootopia 2",
      coverUrl: "https://external-content.duckduckgo.com/iu/?u=https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg",
    },
  ];

  const moviesWithButtons = movies.map((movie) => ({
    ...movie,
    buttonLabel: "Interested?",
    buttonOnClick: () => onInterested(movie),
  }));

  return <MovieList movies={moviesWithButtons} />;
}


