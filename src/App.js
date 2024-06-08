import './App.css';
import Navbar from './Components/Navbar.js';
// import TextForm from './Components/TextForm.js';
import AboutUs from './Components/AboutUs.js';

function App() {
  return (
    <>
    <Navbar title="Chauhan" aboutText="ContactUS  "></Navbar>
    {/* <TextForm></TextForm> */}
    <AboutUs heading="About Us"></AboutUs>
    </>
  );
} 

export default App;

