import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import PopularBooks from "../../components/PopularBooks/PopularBooks";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingMovies />
      <PopularBooks />
      <Footer />
    </>
  );
}

export default Home;