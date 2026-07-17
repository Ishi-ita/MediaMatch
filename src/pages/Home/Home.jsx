import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import TrendingMovies from "../../components/TrendingMovies/TrendingMovies";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingMovies />
      <Footer />
    </>
  );
}

export default Home;