import {
  getSimilarMovies,
  getMovieDetails,
} from "../services/tmdb";

export async function getRecommendedMovies(profile) {
  const seen = new Set();

  // Get all similar movie lists in parallel
  const similarLists = await Promise.all(
    profile.favoriteMovies.map((movie) =>
      getSimilarMovies(movie.id)
    )
  );

  // Collect unique movie IDs
  const ids = [];

  similarLists.forEach((list) => {
    list.forEach((movie) => {
      if (!seen.has(movie.id)) {
        seen.add(movie.id);
        ids.push(movie.id);
      }
    });
  });

  // Fetch movie details in parallel
  const movies = await Promise.all(
    ids.map((id) => getMovieDetails(id))
  );

  return movies;
}