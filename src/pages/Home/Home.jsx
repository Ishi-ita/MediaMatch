import "./Home.css";

import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TopRatedMovies from "../../components/TopRatedMovies/TopRatedMovies";
import LiveBooks from "../../components/LiveBooks/LiveBooks";

function Home() {
  return (
    <>
      <Hero />

      <TrendingMovies />

      <TopRatedMovies />

      <LiveBooks />
    </>
  );
}

export default Home;