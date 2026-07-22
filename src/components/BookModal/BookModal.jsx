import "./BookModal.css";

function BookModal({ book, onClose }) {
  if (!book) return null;

  const info = book.volumeInfo;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="book-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <img
          src={
            info.imageLinks?.thumbnail ||
            "https://via.placeholder.com/200x300?text=No+Image"
          }
          alt={info.title}
        />

        <div className="book-details">
          <h2>{info.title}</h2>

          <div className="book-meta">
  <p>
    ✍ <strong>Author:</strong>{" "}
    {info.authors?.join(", ") || "Unknown"}
  </p>

  <p>
    🏢 <strong>Publisher:</strong>{" "}
    {info.publisher || "Unknown"}
  </p>

  <p>
    📅 <strong>Published:</strong>{" "}
    {info.publishedDate || "Unknown"}
  </p>

  <p>
    🌍 <strong>Language:</strong>{" "}
    {info.language?.toUpperCase() || "Unknown"}
  </p>

  <p>
    📄 <strong>Pages:</strong>{" "}
    {info.pageCount || "Unknown"}
  </p>

  <p>
    ⭐ <strong>Rating:</strong>{" "}
    {info.averageRating || "N/A"}
  </p>

  <p>
    🏷 <strong>Categories:</strong>{" "}
    {info.categories?.join(", ") || "Not Available"}
  </p>
</div>

          <h3>Description</h3>

          <div className="description">
  {info.description || "No description available."}
</div>

{info.previewLink && (
  <a
    href={info.previewLink}
    target="_blank"
    rel="noreferrer"
    className="preview-btn"
  >
    📖 Preview on Google Books
  </a>
)}
        </div>
      </div>
    </div>
  );
}

export default BookModal;