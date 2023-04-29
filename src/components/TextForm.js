import React , {useState} from 'react'
import PropTypes from 'prop-types'
export default function TextForm(props) {
  const [text,setText]=useState('Enter text here');
  const handleUpClick = ()=>{
    // console.log("Okay upper case mein convert karta ho");
    let newText= text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = ()=>{
    // console.log("Okay lower case mein convert karta ho");
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClear = ()=>{
    // console.log("Everything cleared");
    setText("");
  }
  const handleOnChange = (event)=>{
    // console.log("shit was clicked");
    setText(event.target.value);
  }
  const handleAltCaseClick=()=>{
    let newText = text.toLowerCase().split("");
    for (let i = 0; i < newText.length; i += 2) {
    newText[i] = newText[i].toUpperCase();
    }
    setText(newText.join(""));
}
const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}
  return (
    <>
    <div>
        <div className="container mt-2">
        <p className="text-center"><label htmlFor="my-box" className="form-label bg-warning text-dark mt-2 text-center rounded px-4">{props.title}</label></p>
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="3" id="myBox">{props.info}</textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 bg-alert text-white" onClick={handleUpClick}>Convert to upperCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 bg-alert text-white" onClick={handleLowClick}>Convert to lowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 bg-alert text-white" onClick={handleAltCaseClick}>Change case of alternate characters </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 bg-alert text-white" onClick={handleCopy} >Copy to clipboard </button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-3 bg-alert text-white" onClick={handleClear}>Clear </button>
    </div>
    <div className="container my-3">
      <div className="bg-warning text-dark rounded px-auto m-auto text-center">Your text description</div>
      <p className={`mt-3 px-2 text-${props.mode==='dark'?'light':'dark'}`}>Your text has {text.length===0?0:text.split(" ").length} words and {text.length} characters in it.</p>
      
      <p className={`mt-3 px-2 text-${props.mode==='dark'?'light':'dark'}`}>{text.length===0?"Theres nothing to read here":"Your text takes "+0.008*text.split(" ").length*60+" seconds to read your text"}</p>
      <h4 className={`font-weight-bold mx-1 bg-${props.mode==='dark'?'black':'white'} text-${props.mode==='dark'?'light':'dark'}`}>Here's a preview of your text.</h4>
      <p className={`mt-3 px-2 bg-${props.mode==='dark'?'black':'white'} p-3 text-${props.mode==='dark'?'light':'dark'}`}>{text.length===0?"Please enter something to preview":text}</p>
      {/* <p className="mt-3 px-2 bg-light p-3 text-dark">{text.length==0?"There is nothing to read here":text} </p> */}
    </div>
    </>
  )
}
TextForm.prototype={
  title : PropTypes.string,
  info : PropTypes.string
}
