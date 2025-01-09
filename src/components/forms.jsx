import "../styles/forms.css";

function Forms({handleEdit, validEmail }) {
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
      <label htmlFor="emailLabel">Email</label>
        <input
          type="email"
          id="emailLabel"
          className="emailInput"
          placeholder="your-email@example.com"
          onChange={handleEdit}
        />
        {!validEmail && <div className="valError">Enter a valid email: your-email@example.com</div>}
      </form>
    </div>
  );
}

export default Forms;
