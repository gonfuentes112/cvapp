import "../styles/forms.css";

function Forms({handleEdit }) {
  return (
    <div className="forms-body">
      <form>
        <label htmlFor="nameLabel">Name</label>
        <input
          type="text"
          id="nameLabel"
          className="nameInput"
          placeholder="Enter your full name"
          onChange={handleEdit}
        />
      </form>
    </div>
  );
}

export default Forms;
