export function getViewHistory() {
  const history = localStorage.getItem("viewHistory");
  return history ? JSON.parse(history) : [];
}

export function addViewHistory(item) {
  const history = getViewHistory();

  const filtered = history.filter(
    (h) => !(h.id === item.id && h.type === item.type)
  );

  filtered.unshift({
    ...item,
    viewedAt: Date.now(),
  });

  localStorage.setItem(
    "viewHistory",
    JSON.stringify(filtered.slice(0, 30))
  );
}