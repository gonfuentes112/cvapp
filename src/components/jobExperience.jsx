import "../styles/experience.css";
function JobExperience({ form }) {
  return (
    <div className="experience-item">
      <div className="experience-title">{form.jobTitle}</div>
      <div className="experience-dates">
        {form.startDate} - {form.endDate}
      </div>
      <div className="experience-desc">{form.jobDesc}</div>
    </div>
  );
}

export default JobExperience;
