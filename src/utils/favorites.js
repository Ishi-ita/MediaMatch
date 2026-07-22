export function getFavorites() {
  const favorites = localStorage.getItem("favorites");

  return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
}