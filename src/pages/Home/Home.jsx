import "./Home.css";

import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import PopularBooks from "../../components/PopularBooks/PopularBooks";

function Home() {
  return (
    <>
      <Hero />
      <TrendingMovies />
      <PopularBooks />
    </>
  );
}

export default Home;