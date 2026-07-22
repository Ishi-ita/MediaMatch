import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";
import SearchChoiceModal from "../SearchChoiceModal/SearchChoiceModal";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function handleSearch() {
    if (!search.trim()) return;

    setShowModal(true);
  }

  function searchMovies() {
    setShowModal(false);
    navigate(
      `/movies?search=${encodeURIComponent(search)}`
    );
  }

  function searchBooks() {
    setShowModal(false);
    navigate(
      `/books?search=${encodeURIComponent(search)}`
    );
  }

  return (
    <>
      <div className="search-container">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search movies, books or authors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button onClick={handleSearch}>
          Search
        </button>
      </div>

      <SearchChoiceModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onMovies={searchMovies}
        onBooks={searchBooks}
      />
    </>
  );
}

export default SearchBar;