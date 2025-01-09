import { useState } from "react";
import "./App.css";
import Forms from "./components/forms";
import Cv from "./components/cv";

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
    email: email,
    phone: phone,
    github: github,
  };

  return (
    <>
      <Forms handleEdit={handleEdit} validEmail={validEmail}></Forms>
      <Cv headerContent={headerContent}></Cv>
    </>
  );
}

export default App;
