import "./Home.css";

import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import TopRatedMovies from "../../components/TopRatedMovies/TopRatedMovies";
import PopularBooks from "../../components/PopularBooks/PopularBooks";

function Home() {
  return (
    <>
      <Hero />

      <TrendingMovies />

      <TopRatedMovies />

      <PopularBooks />
    </>
  );
}

export default Home;