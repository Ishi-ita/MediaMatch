import "./SectionTitle.css";

function SectionTitle({ icon, title }) {
  return (
    <h2 className="section-title">
      <span className="section-icon">{icon}</span>
      {title}
    </h2>
  );
}

export default SectionTitle;