import "./TrendingMovies.css";

type Movie = {
  id: string;
  title: string;
  year: number;
  coverUrl: string;
};

export default function TrendingTab() {

  const Movies: Movie[] = [
    { id: "1", title: "The Rip", year: 2026, coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df"},
    { id: "2", title: "28 Years Later: The Bone Temple", year: 2026, coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df" },
    { id: "3", title: "Zootopia 2", year: 2025, coverUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F81%252BNup8-8NL._SL1500_.jpg&f=1&nofb=1&ipt=f93402e2b2791622fd05a4f9a05a8adfd94dad8f85a348ebdd400e2d99af99df" },
  ];

  return (
    <section className="trending-tab">
      <h2>Trending Movies</h2>

      {Movies.map(movie => <figure key={movie.id}>
                <img src={movie.coverUrl} alt="Movie Cover"></img> 
                <figcaption>{movie.title}</figcaption> 
        </figure>)}
    </section>
  );
}
