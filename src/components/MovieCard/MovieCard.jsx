import "./MovieCard.css";

function MovieCard({ title, rating, image }) {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />

      <div className="movie-info">
        <h3>{title}</h3>

        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}

export default MovieCard;