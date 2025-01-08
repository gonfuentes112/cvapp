import "../styles/forms.css";

function Forms({ name = "Enter your full name", handleEdit }) {
  return (
    <div className="forms-body">
      <form>
        <label htmlFor="nameLabel">Name</label>
        <input
          type="text"
          id="nameLabel"
          className="nameInput"
          placeholder={name}
          onChange={handleEdit}
        />
      </form>
    </div>
  );
}

export default Forms;
