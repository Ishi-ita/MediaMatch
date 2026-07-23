import { searchBooks } from "../services/books";

export async function getRecommendedBooks(profile) {
  const recommendations = [];
  const seen = new Set();

  for (const book of profile.favoriteBooks) {
    const categories = book.categories || [];

    // Use the first category, otherwise the title
    const query =
      categories.length > 0
        ? categories[0]
        : book.title;

    const books = await searchBooks(query);

    books.forEach((item) => {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        recommendations.push(item);
      }
    });
  }

  return recommendations;
}