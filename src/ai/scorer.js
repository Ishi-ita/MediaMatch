export function scoreMovie(movie, profile) {
  let score = 0;

  const title = movie.title.toLowerCase();

  // Match searched keywords
  profile.searchedKeywords.forEach((keyword) => {
    if (title.includes(keyword.toLowerCase())) {
      score += 5;
    }
  });

  // Higher rated movies get a small bonus
  if (movie.vote_average >= 8) {
    score += 2;
  } else if (movie.vote_average >= 7) {
    score += 1;
  }

  return score;
}