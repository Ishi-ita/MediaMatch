import "./PopularBooks.css";
import BookCard from "../BookCard/BookCard";
import books from "../../data/books";
import SectionTitle from "../SectionTitle/SectionTitle";

function PopularBooks() {
  console.log(books);
  return (
    <section className="popular-books">
      <SectionTitle icon="📚" title="Popular Books" />

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