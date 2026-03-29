import "./MovieCard.css";

export type MovieCardProps = {
  title: string;
  coverUrl: string;
  onRemove: () => void;
  year?: number; // make year optional
};

export default function MovieCard({ title, coverUrl, onRemove, year }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img src={coverUrl} alt={title} className="movie-cover" />
      <h3>{title}</h3>
      {year && <p>{year}</p>} {/* show year only if it exists */}
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
}