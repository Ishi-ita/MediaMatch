import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">MediaMatch</h2>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/movies">Movies</Link>
        </li>

        <li>
          <Link to="/books">Books</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

        <li>
          <Link to="/recommended">Recommended</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        title="Switch Theme"
      >
        <span className={theme === "dark" ? "active" : ""}>
          🌙
        </span>

        <span className={theme === "light" ? "active" : ""}>
          ☀️
        </span>
      </button>
    </nav>
  );
}

export default Navbar;