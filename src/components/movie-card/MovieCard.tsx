import "./MovieCard.css";

export type MovieCardProps = {
  title: string;
  coverUrl: string;
};

export default function MovieCard({ title, coverUrl }: MovieCardProps) {
  return (
    <figure className="movie-card">
      <img src={coverUrl} alt={`Cover for ${title}`} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
