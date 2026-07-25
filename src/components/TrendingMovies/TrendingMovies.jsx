import { useEffect, useState } from "react";

import "./TrendingMovies.css";

import MovieCard from "../MovieCard/MovieCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { getTrendingMovies } from "../../services/tmdb";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function loadMovies() {
      const data = await getTrendingMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);

  const displayedMovies = showAll
    ? movies
    : movies.slice(0, 8);

  return (
    <section className="trending-movies">
      <SectionTitle
  icon="🔥"
  title="Trending Movies"
  link="/movies"
/>

      <div className="movies-grid">
        {displayedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.vote_average.toFixed(1)}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>

      {movies.length > 8 && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default TrendingMovies;