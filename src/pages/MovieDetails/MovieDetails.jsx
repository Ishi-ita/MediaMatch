import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import {
  getMovieDetails,
  getMovieVideos,
} from "../../services/tmdb";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    async function loadMovie() {
  const data = await getMovieDetails(id);
  setMovie(data);

  const videos = await getMovieVideos(id);

  const officialTrailer = videos.find(
    (video) =>
      video.site === "YouTube" &&
      video.type === "Trailer"
  );

  setTrailer(officialTrailer);
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
    <div
      className="backdrop"
      style={{
        backgroundImage: `linear-gradient(
          rgba(15,15,15,0.8),
          rgba(15,15,15,1)
        ), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="movie-header">
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-content">
          <h1>{movie.title}</h1>

          <p className="rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </p>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">
                {genre.name}
              </span>
            ))}
          </div>

          <p>
            📅 <strong>Release:</strong> {movie.release_date}
          </p>

          <p>
            ⏱ <strong>Runtime:</strong> {movie.runtime} min
          </p>

          <p>
            🌍 <strong>Language:</strong>{" "}
            {movie.original_language.toUpperCase()}
          </p>

          {trailer && (
  <a
    href={`https://www.youtube.com/watch?v=${trailer.key}`}
    target="_blank"
    rel="noopener noreferrer"
    className="trailer-btn"
  >
    ▶ Watch Trailer
  </a>
)}
        </div>
      </div>
    </div>

    <div className="overview">
      <h2>Overview</h2>
      <p>{movie.overview}</p>
    </div>
  </section>
);
}

export default MovieDetails;