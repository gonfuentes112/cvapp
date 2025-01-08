import "../styles/cv.css";

function Cv({ name }) {
  if (!name) {
    name = "Your Name";
  }
  return (
    <div className="cv-body">
      <div className="cv-sheet">
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Cv;
