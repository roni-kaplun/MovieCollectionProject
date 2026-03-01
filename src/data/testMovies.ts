import type { Movie } from "../types/Movie";

const testMovies: Movie[] = [
  { id: 1, title: "Inception", coverUrl: "/covers/inception.jpg", year: 2010, genre: "Sci-Fi", rating: 9, watched: true },
  { id: 2, title: "Titanic", coverUrl: "/covers/titanic.jpg", year: 1997, genre: "Romance", rating: 8, watched: true },
  { id: 3, title: "The Matrix", coverUrl: "/covers/matrix.jpg", year: 1999, genre: "Sci-Fi", rating: 9, watched: false },
  { id: 4, title: "The Godfather", coverUrl: "/covers/godfather.jpg", year: 1972, genre: "Crime", rating: 10, watched: false },
  { id: 5, title: "Avengers: Endgame", coverUrl: "/covers/endgame.jpg", year: 2019, genre: "Action", rating: 8, watched: true },
  { id: 6, title: "Frozen", coverUrl: "/covers/frozen.jpg", year: 2013, genre: "Animation", rating: 7, watched: false },
  { id: 7, title: "Joker", coverUrl: "/covers/joker.jpg", year: 2019, genre: "Drama", rating: 8, watched: true },
  { id: 8, title: "Interstellar", coverUrl: "/covers/interstellar.jpg", year: 2014, genre: "Sci-Fi", rating: 9, watched: false },
  { id: 9, title: "Parasite", coverUrl: "/covers/parasite.jpg", year: 2019, genre: "Thriller", rating: 9, watched: true },
  { id: 10, title: "Forrest Gump", coverUrl: "/covers/forrestgump.jpg", year: 1994, genre: "Drama", rating: 10, watched: true }
];

export default testMovies;