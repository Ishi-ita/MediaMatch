import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🎬 MediaMatch</h2>

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
      </ul>
    </nav>
  );
}

export default Navbar;