import "../styles/edForms.css";
function Edforms({ addEdForm, edForms, removeEdForm, handleChangeEd }) {
  return (
    <div className="ed-forms-container">
      <div className="edHeader">
        Add your Education
        <button type="button" className="addEdFormbutton" onClick={addEdForm}>
          +
        </button>
      </div>

      <div className="eds">
        {edForms.map((form) => (
          <form key={form.id}>
            <div className="removeEdHeader">
              <div className="remove-ed-text">Remove this Education</div>
              <button type="button" onClick={() => removeEdForm(form.id)}>
                X
              </button>
            </div>
            <label htmlFor={"edTitle-" + form.id}>Educational Title</label>
            <input
              type="text"
              id={"edTitle-" + form.id}
              placeholder="Bachellor of Memes"
              onChange={(e) =>
                handleChangeEd(form.id, "edTitle", e.target.value)
              }
            />
            <label htmlFor={"start-" + form.id}>Start Date</label>
            <input
              type="date"
              id={"start-" + form.id}
              onChange={(e) =>
                handleChangeEd(form.id, "startDate", e.target.value)
              }
            />
            <label htmlFor={"end-" + form.id}>End Date</label>
            <input
              type="date"
              id={"end-" + form.id}
              onChange={(e) =>
                handleChangeEd(form.id, "endDate", e.target.value)
              }
            />
            <label htmlFor={"edDesc-" + form.id}>Degree Description</label>
            <textarea
              id={"descDesc-" + form.id}
              placeholder="We studied memes"
              onChange={(e) =>
                handleChangeEd(form.id, "edDesc", e.target.value)
              }
            ></textarea>
          </form>
        ))}
      </div>
    </div>
  );
}

export default Edforms;
