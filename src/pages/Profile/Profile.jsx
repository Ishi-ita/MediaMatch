import { useEffect, useState } from "react";
import "./Profile.css";

import { buildUserProfile } from "../../ai/profileBuilder";
import { analyzeUserTaste } from "../../ai/genreAnalyzer";

function Profile() {
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
      <section className="profile-page">
        <h2>Loading Profile...</h2>
      </section>
    );
  }

  return (
    <section className="profile-page">

      <h1>👤 My Profile</h1>

      <div className="profile-card">

        <h2>Statistics</h2>

        <div className="stats">

          <div className="stat-box">
            <h3>{profile.totalMovies}</h3>
            <p>Favorite Movies</p>
          </div>

          <div className="stat-box">
            <h3>{profile.totalBooks}</h3>
            <p>Favorite Books</p>
          </div>

        </div>

        <hr />

        <h2>Favorite Movie Genres</h2>

        {Object.keys(taste.movieGenres).length === 0 ? (
          <p>No favorite movies yet.</p>
        ) : (
          <ul>
            {Object.entries(taste.movieGenres)
              .sort((a, b) => b[1] - a[1])
              .map(([genre, count]) => (
                <li key={genre}>
                  {genre} ({count})
                </li>
              ))}
          </ul>
        )}

        <hr />

        <h2>Favorite Book Categories</h2>

        {Object.keys(taste.bookCategories).length === 0 ? (
          <p>No favorite books yet.</p>
        ) : (
          <ul>
            {Object.entries(taste.bookCategories)
              .sort((a, b) => b[1] - a[1])
              .map(([category, count]) => (
                <li key={category}>
                  {category} ({count})
                </li>
              ))}
          </ul>
        )}

      </div>

    </section>
  );
}

export default Profile;