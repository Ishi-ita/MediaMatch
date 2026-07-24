import { searchBooks } from "../services/books";

export async function getRecommendedBooks(profile) {
  const recommendations = [];
  const seen = new Set();

  for (const book of profile.favoriteBooks) {
    // Build a better search query
    const queryParts = [];

    if (book.title) {
      queryParts.push(book.title);
    }

    if (book.author) {
      queryParts.push(book.author);
    }

    if (book.categories && book.categories.length > 0) {
      queryParts.push(book.categories[0]);
    }

    const query = queryParts.join(" ");

    const books = await searchBooks(query);

    books.forEach((item) => {
      // Don't recommend the same book
      if (item.id === book.id) return;

      if (!seen.has(item.id)) {
        seen.add(item.id);
        recommendations.push(item);
      }
    });
  }

  return recommendations;
}