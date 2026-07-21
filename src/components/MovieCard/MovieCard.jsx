import { Link } from "react-router-dom";

import "./MovieCard.css";

function MovieCard({ title, rating, image, id }) {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img src={image} alt={title} />

      <div className="movie-info">
        <h3>{title}</h3>

        <p>⭐ {rating}</p>
      </div>
    </Link>
  );
}

export default MovieCard;