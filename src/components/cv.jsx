import "../styles/cv.css";
import Email from "./email";

function Cv({ name, title, email }) {
  if (!name) {
    name = "Your Name";
  }
  return (
    <div className="cv-body">
      <div className="cv-sheet">
        <h1>{name}</h1>
        <h2>{title}</h2>
        {email && <Email email={email}/>}
      </div>
    </div>
  );
}

export default Cv;
