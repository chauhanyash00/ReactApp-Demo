import  React , {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import PrivacyPolicy from './Components/PrivacyPolicy';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, mybtn] = useState ("Enable Dark Mode");
  const [alert, setAlert] = useState (null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = "black";
      document.body.style.color = "white";
      mybtn("Enable Light Mode");
      showAlert("Dark Mode Has Been Enable" , "success")
      setTimeout(() => {
        document.title = 'SIT - Admission'
      }, 200);
      setTimeout(() => {
        document.title = 'SIT - ADMISSION'
      }, 150);
    } else {
      setMode('light');
      document.body.style.background = "white";
      document.body.style.color = "black";
      mybtn("Enable Dark Mode");
      showAlert("Light Mode Has Been Enable" , "success")
      document.title = 'SIT - Light Mode'

    }
  }

  const router = createBrowserRouter([
    {
      path: '/Home',
      element: 
      <>
      <Navbar title="Chauhan" aboutText="Contact Us" mode={mode}  toggleMode = {toggleMode} btnText={btnText}></Navbar>
      <Alert alert={alert}/>
      <TextForm heading="Enter Text To Analyse Below" mode={mode} toggleMode={toggleMode} showAlert={showAlert}></TextForm>

      </> 
    },
    {
      path: '/PrivacyPolicy',
      element: 
      <>
      <Navbar title="Chauhan" aboutText="Contact Us" mode={mode}  toggleMode = {toggleMode} btnText={btnText}></Navbar>
      <PrivacyPolicy heading="Privacy Policy"/>
      </>
    }
  ])

  return (
    <>  
      <RouterProvider router={router}/>
    </>
  );
}

export default App;  
