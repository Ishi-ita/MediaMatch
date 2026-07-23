export function recommendContent(
  tasteProfile,
  movies,
  books
) {
  const recommendedMovies = movies
    .map((movie) => {
      let score = 0;

      if (movie.genres) {
        movie.genres.forEach((genre) => {
          score +=
            tasteProfile.movieGenres[genre.name] || 0;
        });
      }

      return {
        ...movie,
        recommendationScore: score,
      };
    })
    .sort(
      (a, b) =>
        b.recommendationScore -
        a.recommendationScore
    );

  const recommendedBooks = books
    .map((book) => {
      let score = 0;

      const categories =
        book.volumeInfo?.categories || [];

      categories.forEach((category) => {
        score +=
          tasteProfile.bookCategories[category] || 0;
      });

      return {
        ...book,
        recommendationScore: score,
      };
    })
    .sort(
      (a, b) =>
        b.recommendationScore -
        a.recommendationScore
    );

  return {
    movies: recommendedMovies.slice(0, 10),
    books: recommendedBooks.slice(0, 10),
  };
}