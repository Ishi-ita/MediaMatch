import {
  getSimilarMovies,
  getMovieDetails,
} from "../services/tmdb";

export async function getRecommendedMovies(profile) {
  const recommendations = [];
  const seen = new Set();

  for (const favorite of profile.favoriteMovies) {
    const similarMovies = await getSimilarMovies(
      favorite.id
    );

    for (const movie of similarMovies) {
      if (seen.has(movie.id)) continue;

      seen.add(movie.id);

      // Fetch complete details so genres are available
      const details = await getMovieDetails(movie.id);

      recommendations.push(details);
    }
  }

  return recommendations;
}