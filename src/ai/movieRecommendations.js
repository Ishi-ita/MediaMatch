import { getSimilarMovies } from "../services/tmdb";

export async function getRecommendedMovies(profile) {
  const recommendations = [];
  const seen = new Set();

  for (const movie of profile.favoriteMovies) {
    const similar = await getSimilarMovies(movie.id);

    similar.forEach((item) => {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        recommendations.push(item);
      }
    });
  }

  return recommendations;
}