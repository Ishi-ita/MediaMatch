import "./BookCard.css";

function BookCard({ title, author, rating, image }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />

      <div className="book-info">
        <h3>{title}</h3>

        <p className="author">{author}</p>

        <p className="rating">⭐ {rating}</p>
      </div>
    </div>
  );
}

export default BookCard;