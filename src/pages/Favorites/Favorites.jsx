import { useEffect, useState } from "react";

import "./Favorites.css";

import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovieDetails } from "../../services/tmdb";
import {
  getFavorites,
  saveFavorites,
} from "../../utils/favorites";

function Favorites() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const favoriteIds = getFavorites();

      const favoriteMovies = await Promise.all(
        favoriteIds.map((id) => getMovieDetails(id))
      );

      setMovies(favoriteMovies);
    }

    loadFavorites();
  }, []);

  function removeFavorite(movieId) {
    const updatedFavorites = getFavorites().filter(
      (id) => id !== movieId
    );

    saveFavorites(updatedFavorites);

    setMovies((prevMovies) =>
      prevMovies.filter(
        (movie) => movie.id !== movieId
      )
    );
  }

  return (
    <section className="favorites-page">
      <h1>❤️ My Favorite Movies</h1>

      {movies.length === 0 ? (
        <div className="no-results">
          <h2>No favorite movies yet.</h2>
          <p>Add some movies to your favorites!</p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <div key={movie.id} className="favorite-card">
              <MovieCard
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />

              <button
                className="remove-btn"
                onClick={() => removeFavorite(movie.id)}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;