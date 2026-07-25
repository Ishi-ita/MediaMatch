import { useEffect, useState } from "react";

import "./LiveBooks.css";

import SectionTitle from "../SectionTitle/SectionTitle";
import BookCard from "../BookCard/BookCard";

import { searchBooks } from "../../services/books";

function LiveBooks() {
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    async function loadBooks() {
      const data = await searchBooks("bestseller");
      setBooks(data);
    }

    loadBooks();
  }, []);

  const displayedBooks = showAll
    ? books
    : books.slice(0, 8);

  return (
    <section className="live-books">
      <SectionTitle
        icon="📚"
        title="Popular Books"
      />

      <div className="books-grid">
        {displayedBooks.map((book) => (
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
            rating={
              book.volumeInfo.averageRating || "N/A"
            }
            published={
              book.volumeInfo.publishedDate
                ? book.volumeInfo.publishedDate.substring(0, 4)
                : "----"
            }
          />
        ))}
      </div>

      {books.length > 8 && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </section>
  );
}

export default LiveBooks;