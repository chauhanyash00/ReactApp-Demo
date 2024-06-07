import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Input Your Text");
    //  setText("Enter Your text");

    const entervalue = (event) => {
      console.log("On change");
      setText(event.target.value);
    }

    const ConvertUpperCase = () => {
      // console.log("Btn Click");
      let newText = text.toUpperCase();
      setText(newText);
    }

    const ConvertLowerCases = () => {
      // console.log("Btn Click");
      let newText = text.toLowerCase();
      setText(newText);
    }

    const Convert = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text = text;
      window.speechSynthesis.speak(newText);
    }

    const ConverClear = () => {
      let newText = "";
      setText(newText);
    }

    const handleCopy = () => {
      var newText = document.getElementById('exampleFormControlTextarea1');
      newText.select();
      navigator.clipboard.writeText(newText.value);
    }

    const handleRSpace = () => {
      let newText = text.split(/ [ ] + /);
      setText(newText.join(" "));
    }
        
  return (
    <div>
      <div className=" container m-5">
        <h1>{props.heading}</h1>
            <textarea  className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={entervalue}></textarea>
            <button className='btn btn-outline-primary mt-5'onClick={ConvertUpperCase}>Convert to Upeer Case</button> &nbsp;
            <button className='btn btn-outline-info mt-5'onClick={ConvertLowerCases}>Convert to Lower Case</button> &nbsp;
            <button className='btn btn-outline-success mt-5' onClick={Convert}>Speak</button> &nbsp;
            <button className='btn btn-outline-danger mt-5' onClick={ConverClear}>clear</button>&nbsp;
            <button className='btn btn-outline-info mt-5' onClick={handleCopy}>Cpoy</button>&nbsp;
            <button className='btn btn-outline-warning mt-5' onClick={handleRSpace}>Remove Space</button>&nbsp;
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