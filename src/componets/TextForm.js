import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("Input Your Text");

    const changeOnText = (event) => {
        setText(event.target.value);   
    }

    const handleUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        }

    const handleClear = () => {
        let newText = " ";
        setText(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handleExSpace = () => {
        let newText = text.split(/[ ]+ /);   
        setText(newText.join(" "));
        
      }

  return (  
        <div>
        <div class="container my-5">    
            <h1>{props.title}</h1>
            <textarea class={`form-control bg-$`} id="exampleFormControlTextarea1" rows="9" value={text} onChange={changeOnText}></textarea>
            <button className='btn btn-outline-warning m-3' onClick={handleUpCase}>UpperCase</button>
            <button className='btn btn-outline-warning m-3' onClick={handleLoCase}>LowerCase</button>
            <button className='btn btn-outline-warning m-3' onClick={handleClear}>Clear</button>
            <button className='btn btn-outline-warning m-3' onClick={handleCopy}>Copy</button>
            {/* <button className='btn btn-outline-warning m-3' onClick={handleSpeak}>Speak</button>     */}
            <button className='btn btn-outline-warning m-3' onClick={handleExSpace}>Remove Extra Space</button>

           
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words</p>
            <p>{text.length} Characters</p>
            <p>{0.008 * text.split("").length} Reading Time</p>
            <h3>Preview</h3>
            <p>{text}</p>   

        </div>
        
    </div>
  )
}
