import "../styles/jobForms.css";
function Jobforms({ addJobForm, jobForms, removeJobForm }) {
  return (
    <div className="job-forms-container">
      <div className="jobsHeader">
        Add your work experience
        <button type="button" className="addJobFormbutton" onClick={addJobForm}>
          +
        </button>
      </div>

      <div className="jobs">
        {jobForms.map((form) => (
          <form key={form.id}>
            <div className="removeJobHeader">
              Remove this job
              <button type="button" onClick={() => removeJobForm(form.id)}>
                X
              </button>
            </div>
            <label htmlFor={"jobTitle-" + form.id}>Job Title</label>
            <input
              type="text"
              id={"jobTitle-" + form.id}
              placeholder="Software Developer"
            />
            <label htmlFor={"start-" + form.id}>Start Date</label>
            <input type="date" id={"start-" + form.id} />
            <label htmlFor={"end-" + form.id}>End Date</label>
            <input type="date" id={"end-" + form.id} />
            <label htmlFor={"jobDesc-" + form.id}>Job Description</label>
            <textarea
              id={"jobDesc-" + form.id}
              placeholder="Developed stuff in react"
            ></textarea>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Jobforms;
