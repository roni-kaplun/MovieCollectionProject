import "./MovieCard.css";

export type MovieCardProps = {
  title: string;
  coverUrl: string;
<<<<<<< HEAD
};

export default function MovieCard({ title, coverUrl }: MovieCardProps) {
  return (
    <figure className="movie-card">
      <img src={coverUrl} alt={`Cover for ${title}`} />
      <figcaption>{title}</figcaption>
    </figure>
=======
  onRemove: () => void;
};

export default function MovieCard({ title, coverUrl, onRemove }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={coverUrl} alt={title} className="movie-cover" />
      <h3>{title}</h3>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
>>>>>>> 7b88681 (Implemented My Movie Cards feature: list, search, and remove)
  );
}
