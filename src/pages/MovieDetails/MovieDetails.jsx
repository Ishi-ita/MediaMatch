import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./MovieDetails.css";

import {
  getMovieDetails,
  getMovieVideos,
  getSimilarMovies,
} from "../../services/tmdb";

import MovieCard from "../../components/MovieCard/MovieCard";

import * as Favorites from "../../utils/favorites";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(id);
      setMovie(data);

setIsFavorite(Favorites.isFavorite(data.id, "movie"));

      const videos = await getMovieVideos(id);

      const officialTrailer = videos.find(
        (video) =>
          video.site === "YouTube" &&
          video.type === "Trailer"
      );

      setTrailer(officialTrailer);
      const similar = await getSimilarMovies(id);
setSimilarMovies(similar.slice(0, 4));
    }

    loadMovie();
  }, [id]);

  function toggleFavorite() {
  if (Favorites.isFavorite(movie.id, "movie")) {
    Favorites.removeFavorite(movie.id, "movie");
    setIsFavorite(false);
  } else {
    Favorites.addFavorite({
      id: movie.id,
      type: "movie",
    });

    setIsFavorite(true);
  }
}

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
            rgba(15,15,15,0.85),
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

            <p className="votes">
              {movie.vote_count.toLocaleString()} votes
            </p>

            <div className="genres">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="genre"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="movie-info-grid">
              <div className="info-card">
                <span>📅</span>
                <div>
                  <h4>Release</h4>
                  <p>{movie.release_date}</p>
                </div>
              </div>

              <div className="info-card">
                <span>⏱</span>
                <div>
                  <h4>Runtime</h4>
                  <p>{movie.runtime} min</p>
                </div>
              </div>

              <div className="info-card">
                <span>🌍</span>
                <div>
                  <h4>Language</h4>
                  <p>{movie.original_language.toUpperCase()}</p>
                </div>
              </div>

              <div className="info-card">
                <span>🔥</span>
                <div>
                  <h4>Popularity</h4>
                  <p>{Math.round(movie.popularity)}</p>
                </div>
              </div>
            </div>

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

            <button
              className={`favorite-btn ${
                isFavorite ? "active" : ""
              }`}
              onClick={toggleFavorite}
            >
              {isFavorite
                ? "❤️ Favorited"
                : "🤍 Add to Favorites"}
            </button>
          </div>
        </div>
      </div>

      <div className="overview">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
      <section className="similar-section">
  <h2>You May Also Like</h2>

  <div className="movies-grid">
    {similarMovies.map((movie) => (
      <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        rating={movie.vote_average.toFixed(1)}
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      />
    ))}
  </div>
</section>
    </section>
  );
}

export default MovieDetails;