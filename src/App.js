import { useState } from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';

function App() {
  const [mode , setMode] = useState ("light");
  const [btnText , setbtnText] = useState ("Enable Dark Mode");

  const toggleMode = ()  => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background="black"
      document.body.style.color="white"
      setbtnText("Enable Light Mode")
    } else {
      setMode('light')
      document.body.style.background="white"
      document.body.style.color="black"
      setbtnText("Enable Dark Mode")

    }
  }
  return (
    <>
    <Navbar heading="Chauhan" aboutUs="About Us" mode={mode} btnText={btnText} toggleMode={toggleMode}/>
    <TextForm title="Enter the text" mode={mode} summary="Text Form Summary"/>
    </>
  );
}

export default App;
