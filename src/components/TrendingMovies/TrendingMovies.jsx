import { useEffect, useState } from "react";

import "./TrendingMovies.css";

import MovieCard from "../MovieCard/MovieCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { getTrendingMovies } from "../../services/tmdb";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getTrendingMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);

  return (
    <section className="trending-movies">
      <SectionTitle icon="🔥" title="Trending Movies" />

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
    </section>
  );
}

export default TrendingMovies;