import React, {useState} from 'react';

export default function TextForm(props) {

  /*const [myStyle, setmyStyle]= useState({
    color: 'black',
      backgroundColor: 'white',
   })
  
   const [btnText, setBtnText]= useState("Dark Mode")
   
   const handleMode = ()=>{
    if(myStyle.color==='black')
    {
      setmyStyle({
        color: 'white',
      backgroundColor: 'black',
      border: '1px solid white',
      
      })
      setBtnText("Light Mode")
    }
      else{
        setmyStyle({
        color: 'black',
      backgroundColor: 'white',
      border: 'none',
      })
      setBtnText("Dark Mode")
    }
   }*/
  
   const handleCopy= ()=>{
    //console.log("Copy Text was clicked" + text)
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleUpclick= ()=>{
    //console.log("Uppercase was clicked" + text)
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleSpaces =()=>{
     //console.log("Remove extra spaces was clicked" + text)
     let newText=text.split(/[ ]+/);
     setText(newText.join(" "))
  }

  const handleReverseclick= ()=>{
    //console.log("Create Reverse was clicked" + text)
    let newText=text.split("").reverse().join("");
    setText(newText)
  }

  const handleClearclick= ()=>{
    //console.log("Clear was clicked" + text)
    let newText='';
    setText(newText)
  }

  const handleLowclick= ()=>{
    //console.log("Lowercase was clicked" + text)
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleOnChange= (event)=>{
   // console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText]=useState('Enter text here');
  return (
    <>
        <div className="Container" style={{color:props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
<div className="mb-3" style={{color:props.mode==='light'?'black':'white'}} >
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'dark':'light'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary  mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleReverseclick}>Reverse text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={handleSpaces}>Remove extra spaces</button>
<button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text</button>

</div>
  <div className="Container3 my-3"style={{color:props.mode==='light'?'black':'white'}} >
      <h2>Your text summary:</h2>
      <p> {text.split(" ").length-1} words {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length)} minutes read</p>
      <h2> Preview </h2>
      <p>{text}</p>
      </div>
  </>
  )
}
