import "./Navbar.css";
import { FaSearch, FaHeart, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">🎬</span>
        <h2>MediaMatch</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Movies</li>
        <li>Books</li>
        <li>Favorites</li>
      </ul>

      <div className="nav-icons">
        <FaSearch />
        <FaHeart />
        <FaUserCircle />
      </div>
    </nav>
  );
}

export default Navbar;