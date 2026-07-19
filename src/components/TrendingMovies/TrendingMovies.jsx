import "./TrendingMovies.css";
import MovieCard from "../MovieCard/MovieCard";
import movies from "../../data/movies";


function TrendingMovies() {
  return (
    <section className="trending">
      <h2>🔥 Trending Movies</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingMovies;