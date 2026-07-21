const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies() {
  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}

export async function getTopRatedMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}



export async function getPopularMovies(page = 1) {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
  );

  const data = await response.json();
  return data.results;
}

export async function searchMovies(query) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );

  const data = await response.json();
  return data.results;
}

export async function getMovieDetails(id) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data;
}