
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';


function App() {

const [mode , setMode]=useState('light')
const [alert,setAlert]=useState(null)

const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor='#1C2833';
    showAlert("Dark mode is set successfully","success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("light mode is set successfully","success")
  }
}

const showAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(()=>{
    setAlert(null)
  },2000)
}

  return (
    <>
    

    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} alert={alert} showAlert={showAlert} />
    <Alert alert={alert} showAlert={showAlert} />
    
          <TextForm heading="TRY TEXTUTILS" mode={mode} showAlert={showAlert} />
          
          
          
        
    
    
    </>
  );
}

export default App;
