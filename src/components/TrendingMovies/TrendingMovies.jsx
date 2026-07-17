import "./TrendingMovies.css";
import MovieCard from "../MovieCard/MovieCard";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Inception",
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Avatar",
    rating: "7.9",
    image: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
];

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