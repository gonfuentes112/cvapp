import "../styles/experience.css";
function EdExperience({ form }) {
  return (
    <div className="experience-item">
      <div className="experience-title">{form.edTitle}</div>
      <div className="experience-dates">
        {form.startDate} {(form.startDate || form.endDate) && "-"} {form.endDate}
      </div>
      <div className="experience-desc">{form.edDesc}</div>
    </div>
  );
}

export default EdExperience;
