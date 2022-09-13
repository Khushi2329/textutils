 import React,{useState} from 'react'
  
 export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase clicked"+ text);
       let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("uppercase","success");
    }
    const handleDownClick=()=>{
        console.log("lowercase clicked"+ text);
       let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("lowercase");

    }
    const handleCopyClick=()=>{
        console.log("i m copy");
     var text=document.getElementById("myBox");
     text.select();
     text.setSelectRange(0,9999);
     navigator.clipboard.writeText(text.value);
     props.showAlert("copied");

    }

    const handleOnChange=(event)=>{
        console. log("on changed");
        setText(event.target.value) ;
        props.showAlert("cleared")

    }
    const handleClearClick=()=>{
      setText(" ")
   
  }

    const[text,setText]=useState(' ')
//    setText("khushiii");
    return (
        <>
     <div className ="container">
        <h1>{props.heading}</h1>
    
  
  <div className="mb-3">
    <textarea className="form-control"value={text} onChange={handleOnChange} id="myBox"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleDownClick}>convert to lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleCopyClick}>copy</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear</button>

     </div>
     <div className="container my-2">
        <h1>your text summary</h1>
        <p>{text.split(" ").length}words ,{text.length} characters </p>
     <p>{0.008*text.split(" ").length}minutes read</p>
     
     <h2>preview</h2></div>
     <p>{text.length>0?text:"enter something  in the textbox to preview"}</p>
     </>
   )
 }
  






