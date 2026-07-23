import { useEffect, useState } from "react";
import "./Recommended.css";

import { buildUserProfile } from "../../ai/profileBuilder";
import { analyzeUserTaste } from "../../ai/genreAnalyzer";

function Recommended() {
  const [profile, setProfile] = useState(null);
  const [taste, setTaste] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      const userProfile = await buildUserProfile();
      const tasteProfile = analyzeUserTaste(userProfile);

      setProfile(userProfile);
      setTaste(tasteProfile);
    }

    loadProfile();
  }, []);

  if (!profile || !taste) {
    return (
      <section className="recommended-page">
        <h2>Loading your taste profile...</h2>
      </section>
    );
  }

  return (
    <section className="recommended-page">

      <h1>🧠 Your Taste Profile</h1>

      <div className="coming-soon">

        <h2>Statistics</h2>

        <p>
          🎬 Favorite Movies: <strong>{profile.totalMovies}</strong>
        </p>

        <p>
          📚 Favorite Books: <strong>{profile.totalBooks}</strong>
        </p>

        <hr />

        <h2>🎬 Movie Genres</h2>

        {Object.keys(taste.movieGenres).length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          <ul>
            {Object.entries(taste.movieGenres).map(
              ([genre, count]) => (
                <li key={genre}>
                  {genre} ({count})
                </li>
              )
            )}
          </ul>
        )}

        <hr />

        <h2>📚 Book Categories</h2>

        {Object.keys(taste.bookCategories).length === 0 ? (
          <p>No favorite books yet.</p>
        ) : (
          <ul>
            {Object.entries(taste.bookCategories).map(
              ([category, count]) => (
                <li key={category}>
                  {category} ({count})
                </li>
              )
            )}
          </ul>
        )}

      </div>

    </section>
  );
}

export default Recommended;