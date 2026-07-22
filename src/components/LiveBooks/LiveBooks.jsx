import { useEffect, useState } from "react";

import "./LiveBooks.css";

import BookCard from "../BookCard/BookCard";
import SectionTitle from "../SectionTitle/SectionTitle";

import { searchBooks } from "../../services/books";

function LiveBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      const data = await searchBooks();
      setBooks(data);
    }

    loadBooks();
  }, []);

  return (
    <section className="live-books">
      <SectionTitle icon="📚" title="Popular Books" />

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
              "https://via.placeholder.com/150x220?text=No+Image"
            }
          />
        ))}
      </div>
    </section>
  );
}

export default LiveBooks;