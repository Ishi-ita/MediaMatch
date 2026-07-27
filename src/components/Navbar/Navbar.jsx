import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        MediaMatch
      </Link>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/movies" onClick={closeMenu}>
            Movies
          </Link>
        </li>

        <li>
          <Link to="/books" onClick={closeMenu}>
            Books
          </Link>
        </li>

        <li>
          <Link to="/favorites" onClick={closeMenu}>
            Favorites
          </Link>
        </li>

        <li>
          <Link to="/recommended" onClick={closeMenu}>
            Recommended
          </Link>
        </li>

        <li>
          <Link to="/profile" onClick={closeMenu}>
            Profile
          </Link>
        </li>
      </ul>

      <div className="navbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;