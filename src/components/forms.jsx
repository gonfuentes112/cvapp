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
        <label htmlFor="titleLabel">Job Title</label>
        <input
          type="text"
          id="titleLabel"
          className="titleInput"
          placeholder="Enter your job title"
          onChange={handleEdit}
        />
      </form>
    </div>
  );
}

export default Forms;
