import { useEffect, useState } from "react";

import "./Favorites.css";

import MovieCard from "../../components/MovieCard/MovieCard";
import BookCard from "../../components/BookCard/BookCard";

import { getMovieDetails } from "../../services/tmdb";

import {
  getFavorites,
  removeFavorite,
} from "../../utils/favorites";

import {
  getBookFavorites,
  removeBookFavorite,
} from "../../utils/bookFavorites";

function Favorites() {
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const favoriteMovies = getFavorites();

      const movieDetails = await Promise.all(
        favoriteMovies.map((movie) =>
          getMovieDetails(movie.id)
        )
      );

      setMovies(movieDetails);

      setBooks(getBookFavorites());
    }

    loadFavorites();
  }, []);

  function handleRemoveMovie(id) {
    removeFavorite(id, "movie");

    setMovies((prev) =>
      prev.filter((movie) => movie.id !== id)
    );
  }

  function handleRemoveBook(id) {
    removeBookFavorite(id);

    setBooks((prev) =>
      prev.filter((book) => book.id !== id)
    );
  }

  return (
    <section className="favorites-page">

      <h1>❤️ My Favorites</h1>

      {/* Movies */}

      <h2>🎬 Favorite Movies</h2>

      {movies.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="favorite-card"
            >
              <MovieCard
                id={movie.id}
                title={movie.title}
                rating={movie.vote_average.toFixed(1)}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />

              <button
                className="remove-btn"
                onClick={() =>
                  handleRemoveMovie(movie.id)
                }
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Books */}

      <h2 style={{ marginTop: "60px" }}>
        📚 Favorite Books
      </h2>

      {books.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => (
            <div
              key={book.id}
              className="favorite-card"
            >
              <BookCard
                title={book.title}
                author={book.author}
                rating={book.rating}
                image={book.image}
                published={book.published}
              />

              <button
                className="remove-btn"
                onClick={() =>
                  handleRemoveBook(book.id)
                }
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