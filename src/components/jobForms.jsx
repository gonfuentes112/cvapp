import "../styles/jobForms.css";
function Jobforms({ addJobForm, jobForms, removeJobForm, handleChangeJobs }) {
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
              onChange={(e) =>
                handleChangeJobs(form.id, "jobTitle", e.target.value)
              }
            />
            <label htmlFor={"start-" + form.id}>Start Date</label>
            <input
              type="date"
              id={"start-" + form.id}
              onChange={(e) =>
                handleChangeJobs(form.id, "startDate", e.target.value)
              }
            />
            <label htmlFor={"end-" + form.id}>End Date</label>
            <input
              type="date"
              id={"end-" + form.id}
              onChange={(e) =>
                handleChangeJobs(form.id, "endDate", e.target.value)
              }
            />
            <label htmlFor={"jobDesc-" + form.id}>Job Description</label>
            <textarea
              id={"jobDesc-" + form.id}
              placeholder="Developed stuff in react"
              onChange={(e) =>
                handleChangeJobs(form.id, "jobDesc", e.target.value)
              }
            ></textarea>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Jobforms;
