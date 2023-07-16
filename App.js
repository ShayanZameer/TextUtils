

import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  const[mode,setMode]=useState('light');
  
  
  const[alert,setALert]=useState(null);  


  const showAlert=(message, type)=>{

    setALert({
      message: message,
      type:type
    })

    setTimeout(() => {
      setALert(null);
    }, 3000);
  }
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("DARK MODE HAS ENABLED","success");
      
      document.body.style.backgroundColor= "grey";
    }else{
      setMode('light');
      showAlert("LIGHT MODE HAS ENABLED","success");
      
      document.body.style.backgroundColor="white";
    }
  }

  return (

    <>
    <Router>

    <Navbar  title="TextUtils" mode={mode} toogleMode={toogleMode} />
  <Alert alertMessage={alert} />
  <div className="container">
      <Routes>
        <Route path="/" element={<TextForm showalert={showAlert} heading="Try-TextUtils" mode={mode} example="Example Text Area" />} />
        <Route path="/about" element={<About mode={mode} />} />
        {/* Other routes */}
      </Routes>
      </div>
    </Router>

    </>

  );
}

export default App;
