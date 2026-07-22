const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export async function searchBooks(query = "bestseller") {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=${API_KEY}`
  );

  const data = await response.json();

  return data.items || [];
}