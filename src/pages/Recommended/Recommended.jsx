import { useEffect, useState } from "react";
import "./Recommended.css";

import MovieCard from "../../components/MovieCard/MovieCard";
import BookCard from "../../components/BookCard/BookCard";

import { buildUserProfile } from "../../ai/profileBuilder";
import { analyzeUserTaste } from "../../ai/genreAnalyzer";
import { recommendContent } from "../../ai/recommendationEngine";
import { getRecommendedMovies } from "../../ai/movieRecommendations";
import { getRecommendedBooks } from "../../ai/bookRecommendations";

function Recommended() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadRecommendations() {
      try {
        // Build user profile
        const profile = await buildUserProfile();

        // Analyze user taste
        const tasteProfile = analyzeUserTaste(profile);

        // Get recommendation candidates
        const movieCandidates = await getRecommendedMovies(profile);
        const bookCandidates = await getRecommendedBooks(profile);

        // Score and rank recommendations
        const recommendations = recommendContent(
          tasteProfile,
          movieCandidates,
          bookCandidates
        );

        // Remove favorite movies
        const favoriteMovieIds = new Set(
          profile.favoriteMovies.map((movie) => movie.id)
        );

        // Remove favorite books
        const favoriteBookIds = new Set(
          profile.favoriteBooks.map((book) => book.id)
        );

        setMovies(
          recommendations.movies.filter(
            (movie) => !favoriteMovieIds.has(movie.id)
          )
        );

        setBooks(
          recommendations.books.filter(
            (book) => !favoriteBookIds.has(book.id)
          )
        );
      } catch (error) {
        console.error("Recommendation Error:", error);
      }

      setLoading(false);
    }

    loadRecommendations();
  }, []);

  if (loading) {
    return (
      <section className="recommended-page">
        <h2>Finding recommendations...</h2>
      </section>
    );
  }

  return (
    <section className="recommended-page">
      <h1>✨ Recommended For You</h1>

      <h2>🎬 Movies You May Like</h2>

      {movies.length === 0 ? (
        <p>No movie recommendations found.</p>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </div>
      )}

      <h2 style={{ marginTop: "60px" }}>
        📚 Books You May Like
      </h2>

      {books.length === 0 ? (
        <p>No book recommendations found.</p>
      ) : (
        <div className="books-grid">
          {books.map((book) => {
            const info = book.volumeInfo;

            return (
              <BookCard
                key={book.id}
                title={info.title}
                author={
                  info.authors
                    ? info.authors.join(", ")
                    : "Unknown Author"
                }
                image={
                  info.imageLinks?.thumbnail ||
                  "https://via.placeholder.com/128x190?text=No+Image"
                }
                rating={info.averageRating || "N/A"}
                published={
                  info.publishedDate
                    ? info.publishedDate.substring(0, 4)
                    : "----"
                }
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Recommended;