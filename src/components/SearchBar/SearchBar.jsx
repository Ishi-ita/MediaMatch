import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />

      <input
        type="text"
        placeholder="Search movies, books or authors..."
      />

      <button>Search</button>
    </div>
  );
}

export default SearchBar;