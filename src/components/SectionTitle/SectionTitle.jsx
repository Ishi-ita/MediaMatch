import { Link } from "react-router-dom";
import "./SectionTitle.css";

function SectionTitle({
  icon,
  title,
  link,
  linkText = "View All",
}) {
  return (
    <div className="section-header">
      <h2 className="section-title">
        <span className="section-icon">{icon}</span>
        {title}
      </h2>

      {link && (
        <Link
          to={link}
          className="section-link"
        >
          {linkText} →
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;