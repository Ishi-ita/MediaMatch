import { useEffect, useState } from "react";

import "./TopRatedMovies.css";

import MovieCard from "../MovieCard/MovieCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { getTopRatedMovies } from "../../services/tmdb";

function TopRatedMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const data = await getTopRatedMovies();
      setMovies(data);
    }

    loadMovies();
  }, []);

  return (
    <section className="top-rated-movies">
      <SectionTitle icon="⭐" title="Top Rated Movies" />

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.vote_average.toFixed(1)}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </section>
  );
}

export default TopRatedMovies;