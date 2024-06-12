import { useState } from 'react';
import './App.css';
import Navbar from './componetsh/Navbar';
import TextForm from './componetsh/TextForm';

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


  const greentoggleMode = ()  => {
    if (mode === 'light') {
      setMode('green')
      document.body.style.background="green"
      document.body.style.color="lightgreen"
    } else {
      setMode('lightgreen')
      document.body.style.background="lightgreen"
      document.body.style.color="green"
    }
  }

  const bluetoggleMode = ()  => {
    if (mode === 'light') {
      setMode('blue')
      document.body.style.background="blue"
      document.body.style.color="lightblue"
    } else {
      setMode('lightblue')
      document.body.style.background="lightblue"
      document.body.style.color="blue"
    }
  }

  const textareatoggleMode = () => {
    if (document.getElementsByClassName('textarea')) {
      setMode('green')
      document.body.style.background="green"
      document.body.style.color="lightgreen"
    } else {
      setMode('lightgreen')
      document.body.style.background="lightgreen"
      document.body.style.color="green"
    }
  }

  return (
    <>
    <Navbar heading="Chauhan" aboutUs="About Us" mode={mode} btnText={btnText} toggleMode={toggleMode} greentoggleMode={greentoggleMode} bluetoggleMode={bluetoggleMode} textareatoggleMode={textareatoggleMode}/>
    <TextForm title="Enter the text" mode={mode} summary="Text Form Summary" textareatoggleMode={textareatoggleMode}/>
    </>
  );
}

export default App;
