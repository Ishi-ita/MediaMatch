import "./SearchChoiceModal.css";

function SearchChoiceModal({
  isOpen,
  onClose,
  onMovies,
  onBooks,
}) {
  if (!isOpen) return null;

  return (
    <div className="search-modal-overlay">
      <div className="search-modal">
        <h2>🔍 Search</h2>

        <p>Where would you like to search?</p>

        <button
          className="choice-btn"
          onClick={onMovies}
        >
          Search Movies
        </button>

        <button
          className="choice-btn"
          onClick={onBooks}
        >
          Search Books
        </button>

        <button
          className="cancel-btn"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default SearchChoiceModal;