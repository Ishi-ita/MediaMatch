import "./Recommended.css";
import { buildUserProfile } from "../../ai/profileBuilder";

function Recommended() {
  const profile = buildUserProfile();

  return (
    <section className="recommended-page">
      <h1>✨ Recommended For You</h1>

      <div className="coming-soon">
        <h2>Your Taste Profile</h2>

        <p>
          ❤️ Favorites: <strong>{profile.totalFavorites}</strong>
        </p>

        <p>
          🔍 Searches: <strong>{profile.totalSearches}</strong>
        </p>

        <p>
          👀 Viewed Items: <strong>{profile.totalViews}</strong>
        </p>

        <hr />

        <h3>Recent Searches</h3>

        {profile.searchedKeywords.length === 0 ? (
          <p>No searches yet.</p>
        ) : (
          <ul>
            {profile.searchedKeywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default Recommended;