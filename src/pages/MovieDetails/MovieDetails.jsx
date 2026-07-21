import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import { getMovieDetails } from "../../services/tmdb";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }

    loadMovie();
  }, [id]);

  if (!movie) {
    return (
      <section className="movie-details">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className="movie-details">
      <h1>{movie.title}</h1>

      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p>⭐ {movie.vote_average.toFixed(1)}</p>

      <p>📅 {movie.release_date}</p>

      <p>{movie.overview}</p>
    </section>
  );
}

export default MovieDetails;