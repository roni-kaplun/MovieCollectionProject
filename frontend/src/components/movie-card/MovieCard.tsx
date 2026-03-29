import React from "react";
import "./MovieCard.css";

// Props type
export type MovieCardProps = {
  title: string;
  year: number;
  coverUrl: string;
  onRemove: () => void;
};

// Functional component
const MovieCard: React.FC<MovieCardProps> = ({ title, year, coverUrl, onRemove }) => {
  return (
    <div className="movie-card">
      <img src={coverUrl} alt={title} className="movie-cover" />
      <h3>{title}</h3>
      <p>{year}</p>
      <button className="remove-btn" onClick={onRemove}>
        Remove
      </button>
    </div>
  );
};

export default MovieCard;