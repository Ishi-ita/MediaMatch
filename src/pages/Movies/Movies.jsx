import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Movies.css";

import MovieCard from "../../components/MovieCard/MovieCard";
import {
  getPopularMovies,
  searchMovies,
} from "../../services/tmdb";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {
  async function loadMovies() {
    const query = searchParams.get("search");

    if (query) {
      setSearch(query);

      const data = await searchMovies(query);
      setMovies(data);
    } else {
      const data = await getPopularMovies(page);
      setMovies(data);
    }
  }

  loadMovies();
}, [page, searchParams]);

  async function handleSearch() {
    if (!search.trim()) {
      const data = await getPopularMovies(page);
      setMovies(data);
      return;
    }

    const data = await searchMovies(search);
    setMovies(data);
  }

  return (
    <section className="movies-page">
      <h1>
  {search.trim()
    ? `Search Results for "${search}"`
    : "Popular Movies"}
</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {movies.length === 0 ? (
        <div className="no-results">
          <h2>No movies found.</h2>
          <p>Try another search.</p>
        </div>
      ) : (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard
  key={movie.id}
  id={movie.id}
  title={movie.title}
  rating={movie.vote_average.toFixed(1)}
  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
/>
            ))}
          </div>

          <div className="pagination">
            <button
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            >
              ← Previous
            </button>

            <span>Page {page}</span>

            <button
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next →
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Movies;