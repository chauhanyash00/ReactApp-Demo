import { clear } from '@testing-library/user-event/dist/clear';
import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Input Your Text");
    //  setText("Enter Your text");

    const handleOnChange = (event) => {
      console.log("On change");
      setText(event.target.value);
    }

    const handleUpChange = () => {
      // console.log("Btn Click");
      let newText = text.toUpperCase();
      setText(newText);
    }

    const handleLoChange = () => {
      // console.log("Btn Click");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const handleSpeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    }

    const handleclear = () => {
      let newText = "";
      setText(newText);

    }

  return (
    <div>
      <div className=" container m-5">
        <h1>{props.heading}</h1>
            <textarea  className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-primary mt-5'onClick={handleUpChange}>Convert to Upeer Case</button> &nbsp;
            <button className='btn btn-outline-info mt-5'onClick={handleLoChange}>Convert to Lower Case</button> &nbsp;
            <button className='btn btn-outline-success mt-5' onClick={handleSpeak}>Speak</button> &nbsp;
            <button className='btn btn-outline-warning mt-5' onClick={handleclear}>clear</button>
    </div>

    <div className='container'>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words</p>
      <p>{text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Reading Time</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>

    </div>
  ) 
}
