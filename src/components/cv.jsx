import "../styles/cv.css";

function Cv({ name, title }) {
  if (!name) {
    name = "Your Name";
  }
  return (
    <div className="cv-body">
      <div className="cv-sheet">
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Cv;
