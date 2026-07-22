export function getSearchHistory() {
  const history = localStorage.getItem("searchHistory");
  return history ? JSON.parse(history) : [];
}

export function addSearchHistory(query, type) {
  const history = getSearchHistory();

  const item = {
    query,
    type, // "movie" or "book"
    searchedAt: Date.now(),
  };

  // Remove duplicate of same query/type
  const filtered = history.filter(
    (h) =>
      !(
        h.query.toLowerCase() === query.toLowerCase() &&
        h.type === type
      )
  );

  filtered.unshift(item);

  // Keep only the latest 20 searches
  localStorage.setItem(
    "searchHistory",
    JSON.stringify(filtered.slice(0, 20))
  );
}