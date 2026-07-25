import "./Hero.css";
import SearchBar from "../SearchBar/SearchBar";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="brand"> MediaMatch</p>

        <h1>
          Discover <span>|</span> Rate <span>|</span> Recommend
        </h1>

        <h3>
          Because great stories deserve great recommendations.
        </h3>

        <p className="description">
          Find movies and books tailored to your taste, rate what you love,
          and discover your next favorite story.
        </p>

        <SearchBar />

        <div className="hero-links">

          <span>🔥 Trending</span>

          <span>⭐ Top Rated</span>

          <span>📚 Books</span>

        </div>

      </div>
    </section>
  );
}

export default Hero;