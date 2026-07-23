import { getFavorites } from "../utils/favorites";
import { getBookFavorites } from "../utils/bookFavorites";
import { getMovieDetails } from "../services/tmdb";

export async function buildUserProfile() {
  const favoriteMovies = getFavorites();
  const favoriteBooks = getBookFavorites();

  // Fetch complete movie details
  const movies = await Promise.all(
    favoriteMovies.map((movie) =>
      getMovieDetails(movie.id)
    )
  );

  return {
    favoriteMovies: movies,
    favoriteBooks,

    totalMovies: movies.length,
    totalBooks: favoriteBooks.length,
  };
}