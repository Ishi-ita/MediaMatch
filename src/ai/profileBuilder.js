import { getFavorites } from "../utils/favorites";
import { getSearchHistory } from "../utils/searchHistory";
import { getViewHistory } from "../utils/viewHistory";

export function buildUserProfile() {
  const favorites = getFavorites();
  const searches = getSearchHistory();
  const views = getViewHistory();

  return {
    favorites,
    searches,
    views,

    totalFavorites: favorites.length,
    totalSearches: searches.length,
    totalViews: views.length,

    searchedKeywords: searches.map((item) => item.query),
  };
}