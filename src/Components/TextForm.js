import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Input Your Text");
    //  setText("Enter Your text");

    const handleOnChange = (event) => {
      // console.log("On change");
      setText(event.target.value);
    }

    const handleUpChange = () => {
      // console.log("Btn Click");
      let newText = text.toUpperCase();
      setText(newText);
    }

  return (
    <div className="m-5">
        <h1>{props.heading}</h1>
            <textarea  className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
            <button className='btn btn-outline-danger mt-5'onClick={handleUpChange}>Convert to Upeer Case</button>
    </div>
  ) 
}
