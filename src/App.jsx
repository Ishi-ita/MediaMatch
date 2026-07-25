import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Recommended from "./pages/Recommended/Recommended";
import Profile from "./pages/Profile/Profile";

import Layout from "./layout/Layout";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import Books from "./pages/Books/Books";
import Favorites from "./pages/Favorites/Favorites";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route
  path="/favorites"
  element={<Favorites />}
/>

        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="books" element={<Books />} />

        <Route path="favorites" element={<Favorites />} />

        <Route path="search" element={<Search />} />

        <Route path="recommended" element={<Recommended />} />

        <Route path="profile" element={<Profile />} />

      </Route>
    </Routes>
  );
}

export default App;