import React,{useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Input Your Text");
    //  setText  = ("Enter Your text");

  return (
    <div className="m-5">
        <h1>{props.heading}</h1>
            <textarea  className="form-control" id="exampleFormControlTextarea1" rows="10" value={text}></textarea>
            <button className='btn btn-outline-danger mt-5'>Convert to Upeer Case</button>
    </div>
  ) 
}
