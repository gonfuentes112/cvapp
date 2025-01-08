import { useState } from 'react'
import './App.css'
import Forms from './components/forms'
import Cv from './components/cv'


function App() {
  const [name, setName] = useState('')
  // const [title, setTitle] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')

  function handleEdit(e) {
    const target = e.target;
    if (target.className.includes('nameInput')) {
      setName(target.value);
    }
  }

  return (
    <>
    <Forms name={name} handleEdit={handleEdit}></Forms>
    <Cv name={name}></Cv>
    </>
  )
}

export default App
