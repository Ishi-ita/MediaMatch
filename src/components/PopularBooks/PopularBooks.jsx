import "./PopularBooks.css";
import BookCard from "../BookCard/BookCard";
import books from "../../data/books";

function PopularBooks() {
  return (
    <section className="popular-books">
      <h2>📚 Popular Books</h2>

      <div className="book-grid">
        {books.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            image={book.image}
          />
        ))}
      </div>
    </section>
  );
}

export default PopularBooks;