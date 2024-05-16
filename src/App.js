import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showAlert=(message , type) => {
    setalert({
        msg: message,
        type: type
    })
    setTimeout(() => {
        setalert(null);
        
    }, 1500);

  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "sucess");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "sucess");
    }
  }
  return ( 
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;
