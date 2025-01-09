import "../styles/forms.css";

function Forms({ handleEdit, validEmail, children }) {
  return (
    <div className="forms-body">
        <div className="contact-info-forms">
        <form>
        <label htmlFor="nameInput">Full Name</label>
        <input
          type="text"
          id="nameInput"
          className="nameInput"
          placeholder="Enter your full name"
          onChange={handleEdit}
        />
        <label htmlFor="titleInput">Job Title</label>
        <input
          type="text"
          id="titleInput"
          className="titleInput"
          placeholder="Enter your job title"
          onChange={handleEdit}
        />
        <label htmlFor="emailInput">Email</label>
        <input
          type="email"
          id="emailInput"
          className="emailInput"
          placeholder="your-email@example.com"
          onChange={handleEdit}
        />
        {!validEmail && (
          <div className="valError">
            Enter a valid email: your-email@example.com
          </div>
        )}
        <label htmlFor="phoneInput">Phone Number</label>
        <input
          type="phone"
          id="phoneInput"
          className="phoneInput"
          placeholder="##-####-####"
          onChange={handleEdit}
        />
        <label htmlFor="githubInput">Your Github Repo</label>
        <input
          type="text"
          id="githubInput"
          className="githubInput"
          placeholder="https://github.com/yourrepo"
          onChange={handleEdit}
        />
      </form>
        </div>

      {children}
    </div>
  );
}

export default Forms;
