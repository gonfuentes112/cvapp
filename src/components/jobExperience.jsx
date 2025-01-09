import "../styles/jobExperience.css";
function JobExperience({ form }) {
  return (
    <div className="job-experience-item">
      <div className="job-experience-title">{form.jobTitle}</div>
      <div className="job-experience-dates">
        {form.startDate} - {form.endDate}
      </div>
      <div className="job-experience-desc">{form.jobDesc}</div>
    </div>
  );
}

export default JobExperience;
