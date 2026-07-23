import { getFavorites } from "../utils/favorites";
import { getMovieDetails } from "../services/tmdb";

export async function analyzeGenres() {
  const favorites = getFavorites();

  const genreScores = {};

  for (const movieId of favorites) {
    try {
      const movie = await getMovieDetails(movieId);

      movie.genres.forEach((genre) => {
        if (!genreScores[genre.name]) {
          genreScores[genre.name] = 0;
        }

        genreScores[genre.name]++;
      });
    } catch (error) {
      console.error(
        `Failed to load movie ${movieId}`,
        error
      );
    }
  }

  return genreScores;
}