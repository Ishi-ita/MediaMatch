const STORAGE_KEY = "bookFavorites";

export function getBookFavorites() {
  const favorites = localStorage.getItem(STORAGE_KEY);
  return favorites ? JSON.parse(favorites) : [];
}

export function saveBookFavorites(favorites) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(favorites)
  );
}

export function addBookFavorite(book) {
  const favorites = getBookFavorites();

  const exists = favorites.some(
    (item) => item.id === book.id
  );

  if (!exists) {
    favorites.push(book);
    saveBookFavorites(favorites);
  }
}

export function removeBookFavorite(id) {
  const favorites = getBookFavorites().filter(
    (book) => book.id !== id
  );

  saveBookFavorites(favorites);
}

export function isBookFavorite(id) {
  return getBookFavorites().some(
    (book) => book.id === id
  );
}