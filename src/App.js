import  React , {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, mybtn] = useState ("Enable Dark Mode");


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      mybtn("Enable Light Mode");
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      mybtn("Enable Dark Mode");
    }
  }

  return (
    <>
    <Navbar title="Chauhan" aboutText="Contact Us" mode={mode}  toggleMode = {toggleMode} btnText={btnText}></Navbar>
    <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode}></TextForm>
    </>
  );
}

export default App; 
