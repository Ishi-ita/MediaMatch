import { useEffect, useState } from "react";
import "./Books.css";

import { searchBooks } from "../../services/books";
import BookCard from "../../components/BookCard/BookCard";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadBooks("bestseller");
  }, []);

  async function loadBooks(query) {
    const data = await searchBooks(query);
    setBooks(data);
  }

  function handleSearch() {
    if (search.trim() === "") return;
    loadBooks(search);
  }

  return (
    <section className="books-page">
      <h1>📚 Books</h1>

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

      <div className="books-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
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
          />
        ))}
      </div>
    </section>
  );
}

export default Books;