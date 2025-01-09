import { useState } from "react";
import "./App.css";
import Forms from "./components/forms";
import Cv from "./components/cv";

function App() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  // const [phone, setPhone] = useState('')

  function handleEdit(e) {
    const target = e.target;
    if (target.className.includes("nameInput")) setName(target.value);
    if (target.className.includes("titleInput")) setTitle(target.value);
    if (target.className.includes("emailInput")) {
      setEmail(target.value);
      setValidEmail(target.validity.valid);
    }
  }

  return (
    <>
      <Forms handleEdit={handleEdit} validEmail={validEmail}></Forms>
      <Cv name={name} title={title} email={email} ></Cv>
    </>
  );
}

export default App;
