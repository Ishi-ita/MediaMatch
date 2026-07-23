const STORAGE_KEY = "favorites";

export const getFavorites = () => {
  const favorites = localStorage.getItem(STORAGE_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
};

export const addFavorite = (item) => {
  const favorites = getFavorites();

  const exists = favorites.some(
    (fav) => fav.id === item.id && fav.type === item.type
  );

  if (!exists) {
    favorites.push(item);
    saveFavorites(favorites);
  }
};

export const removeFavorite = (id, type) => {
  const favorites = getFavorites().filter(
    (item) => !(item.id === id && item.type === type)
  );

  saveFavorites(favorites);
};

export const isFavorite = (id, type) => {
  return getFavorites().some(
    (item) => item.id === id && item.type === type
  );
};