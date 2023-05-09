
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
   const [mode,setMode]=useState('light');
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor='white'
      }
    }
  return ( 
    <>
    
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<div className="container" my-3>
<TextForm heading="Enter the text to be analyzed" mode={mode}/>
</div>
</>
  );
}

export default App;
