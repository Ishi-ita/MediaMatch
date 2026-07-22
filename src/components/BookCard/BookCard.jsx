import "./BookCard.css";

function BookCard({
  image,
  title,
  author,
  rating,
  published,
}) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />

      <div className="book-info">
        <h3>{title}</h3>

        <p className="author">{author}</p>

        <div className="book-meta">
          <span>⭐ {rating}</span>
          <span>{published}</span>
        </div>
      </div>
    </div>
  );
}

export default BookCard;