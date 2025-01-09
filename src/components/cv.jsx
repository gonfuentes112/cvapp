import "../styles/cv.css";
import Email from "./email";
import Phone from "./phone";
import Github from "./github";

function Cv({ headerContent }) {
  let name = headerContent.name;
  const { title, contactInfo } = headerContent;
  const [email, phone, github] = contactInfo;

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
          {email && phone && "|"}
          {phone && <Phone phone={phone} />}
          {phone && github && "|"}
          {github && <Github github={github} />}
        </div>
      </div>
    </div>
  );
}

export default Cv;
