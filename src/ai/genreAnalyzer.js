export function analyzeUserTaste(profile) {
  const movieGenres = {};
  const bookCategories = {};

  // Analyze movie genres
  profile.favoriteMovies.forEach((movie) => {
    movie.genres.forEach((genre) => {
      movieGenres[genre.name] =
        (movieGenres[genre.name] || 0) + 1;
    });
  });

  // Analyze book categories
  profile.favoriteBooks.forEach((book) => {
    if (!book.categories) return;

    book.categories.forEach((category) => {
      bookCategories[category] =
        (bookCategories[category] || 0) + 1;
    });
  });

  return {
    movieGenres,
    bookCategories,
  };
}