
import { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
   const [ mode, setMode]= useState('light');
   const[ alert, setAlert] = useState(null);
   const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);

   }
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#090c2d'
      showAlert("Dark mode is enabled","success")
      document.title='TextUtils(Dark mode)'
      }
      else
      {
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("Light mode is enabled","success")
        document.title='TextUtils(Light mode)'
      }
    }
  return ( 
    <>
    
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container" my-3>
<TextForm showAlert={showAlert} heading="Enter the text to be analyzed" mode={mode}/>
</div>
</>
  );
}

export default App;
