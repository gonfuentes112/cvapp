import { useState } from "react";
import "./App.css";
import Forms from "./components/forms";
import Cv from "./components/cv";
import Jobforms from "./components/jobForms";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [phone, setPhone] = useState("");
  const [github, setGithub] = useState("");

  function handleEdit(e) {
    const target = e.target;
    if (target.className.includes("nameInput")) setName(target.value);
    if (target.className.includes("titleInput")) setTitle(target.value);
    if (target.className.includes("emailInput")) {
      setEmail(target.value);
      setValidEmail(target.validity.valid);
    }
    if (target.className.includes("phoneInput")) setPhone(target.value);
    if (target.className.includes("githubInput")) setGithub(target.value);
  }

  const headerContent = {
    name: name,
    title: title,
    contactInfo: [email, phone, github],
  };

  const [jobForms, setJobForms] = useState([
    {
      id: self.crypto.randomUUID(),
      jobTitle: "",
      startDate: "",
      endDate: "",
      jobDesc: "",
    },
  ]);

  function addJobForm() {
    setJobForms([
      ...jobForms,
      {
        id: self.crypto.randomUUID(),
        jobTitle: "",
        startDate: "",
        endDate: "",
        jobDesc: "",
      },
    ]);
  }

  function removeJobForm(id) {
    setJobForms(
      jobForms.filter((form) => {
        return form.id != id;
      })
    );
  }

  return (
    <>
      <Forms handleEdit={handleEdit} validEmail={validEmail}>
        <Jobforms
          addJobForm={addJobForm}
          jobForms={jobForms}
          removeJobForm={removeJobForm}
        />
      </Forms>
      <Cv headerContent={headerContent}></Cv>
    </>
  );
}

export default App;
