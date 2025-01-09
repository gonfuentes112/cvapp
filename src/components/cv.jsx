import "../styles/cv.css";
import Email from "./email";
import Phone from "./phone";
import Github from "./github";

function Cv({ name, title, email, phone, github }) {
  if (!name) {
    name = "Your Name";
  }
  return (
    <div className="cv-body">
      <div className="cv-sheet">
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div className="contact-info">
          {email && <Email email={email} />}
          {phone && <Phone phone={phone} />}
          {github && <Github github={github} />}
        </div>
      </div>
    </div>
  );
}

export default Cv;
