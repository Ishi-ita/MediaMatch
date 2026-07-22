const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export async function searchBooks(query = "bestseller") {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=20&key=${API_KEY}`
  );

  const data = await response.json();

  const books = data.items || [];

  // If it's the default search, don't filter
  if (query === "bestseller") {
    return books;
  }

  // Filter by title or author
  return books.filter((book) => {
    const title = (book.volumeInfo.title || "").toLowerCase();

    const authors = (book.volumeInfo.authors || [])
      .join(" ")
      .toLowerCase();

    const search = query.toLowerCase();

    return (
      title.includes(search) ||
      authors.includes(search)
    );
  });
}