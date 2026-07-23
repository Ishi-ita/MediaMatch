import { buildUserProfile } from "./profileBuilder";
import { scoreMovie } from "./scorer";

export function getRecommendations(candidateMovies) {
  const profile = buildUserProfile();

  return candidateMovies
    .map((movie) => ({
      ...movie,
      score: scoreMovie(movie, profile),
    }))
    .sort((a, b) => b.score - a.score);
}