import { searchBooks } from "../services/books";

export async function getRecommendedBooks(profile) {
  const seen = new Set();

  // Create all search requests first
  const requests = profile.favoriteBooks.map((book) => {
    const queryParts = [];

    if (book.title) queryParts.push(book.title);
    if (book.author) queryParts.push(book.author);
    if (book.categories?.length > 0) {
      queryParts.push(book.categories[0]);
    }

    return searchBooks(queryParts.join(" "));
  });

  // Run all requests in parallel
  const results = await Promise.all(requests);

  const recommendations = [];

  results.forEach((books, index) => {
    const favoriteBook = profile.favoriteBooks[index];

    books.forEach((item) => {
      if (item.id === favoriteBook.id) return;

      if (!seen.has(item.id)) {
        seen.add(item.id);
        recommendations.push(item);
      }
    });
  });

  return recommendations;
}