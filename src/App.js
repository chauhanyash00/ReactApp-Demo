import {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
    } else {
      setMode('ligth');
      document.body.style.background = "white";
    }
  }
  return (
    <>
    <Navbar title="Chauhan" aboutText="Contact Us" mode={mode} toggleMode = {toggleMode}></Navbar>
    <TextForm heading="Enter Text To Analyse Below"></TextForm>
    </>
  );
}

export default App; 
