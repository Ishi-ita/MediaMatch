import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("mediamatch-favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "mediamatch-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  function addFavorite(item) {
    setFavorites((prev) => [...prev, item]);
  }

  function removeFavorite(id) {
    setFavorites((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function isFavorite(id) {
    return favorites.some((item) => item.id === id);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}