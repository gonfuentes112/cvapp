import "../styles/cv.css";
import Email from "./email";
import Phone from "./phone";
import Github from "./github";
import JobExperience from "./jobExperience";

function Cv({ headerContent, jobForms }) {
  let name = headerContent.name;
  const { title, contactInfo } = headerContent;
  const [email, phone, github] = contactInfo;

  if (!name) {
    name = "Your Name";
  }
  return (
    <div className="cv-body">
      <div className="cv-sheet">
        <div className="F">
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
        <div className="work-experience-container">
          {jobForms.map((form) => {
            return <JobExperience key={form.id} form={form} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Cv;
