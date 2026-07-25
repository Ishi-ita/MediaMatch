import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Books.css";
import BookModal from "../../components/BookModal/BookModal";
import { searchBooks } from "../../services/books";
import BookCard from "../../components/BookCard/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
  async function initializeBooks() {
    const query = searchParams.get("search");

    if (query) {
      const data = await searchBooks(query);
      setBooks(data);
      setSearch(query);
    } else {
      loadBooks("bestseller");
    }
  }

  initializeBooks();
}, [searchParams]);

  async function loadBooks(query) {
  setLoading(true);

  const data = await searchBooks(query);

  setBooks(data);
  setLoading(false);
}

  function handleSearch() {
    if (search.trim() === "") return;
    loadBooks(search);
  }

  return (
    <section className="books-page">
      <h1>
  {search.trim()
    ? ` Search Results for "${search}"`
    : "Popular Books"}
</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          className="search-input"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {loading ? (
  <div className="loading">
    <h2>Loading books...</h2>
  </div>
) : books.length === 0 ? (
  <div className="no-results">
    <h2> No books found.</h2>
    <p>Try another search.</p>
  </div>
) : (
  <div className="books-grid">
    {books.map((book) => (
      <div
   key={book.id}
  className="book-card-wrapper"
  onClick={() => setSelectedBook(book)}
>
  <BookCard
    title={book.volumeInfo.title}
    author={
      book.volumeInfo.authors
        ? book.volumeInfo.authors.join(", ")
        : "Unknown Author"
    }
    image={
      book.volumeInfo.imageLinks?.thumbnail ||
      "https://via.placeholder.com/128x190?text=No+Image"
    }
    rating={book.volumeInfo.averageRating || "N/A"}
    published={
      book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate.substring(0, 4)
        : "----"
    }
  />
</div>
    ))}
  </div>
)}
<BookModal
  book={selectedBook}
  onClose={() => setSelectedBook(null)}
/>
    </section>
  );
}

export default Books;