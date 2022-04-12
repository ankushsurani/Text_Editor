import './App.css';
import React, {useState} from 'react';
import Navbar from './allcomponents/Navbar';
import About from './allcomponents/About';
import Boxtext from './allcomponents/Boxtext';
import Alert from './allcomponents/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null);

  const [mode, setmode] = useState('light');

  let showalert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  let togglemode = ()=>{
      if (mode==='light') {
        setmode('dark')
        document.body.style.backgroundColor='#615F5F'
        showalert("Darkmode enabled","success")
        document.title = 'TextEditor - Darkmode';
        // setInterval(() => {
        //   document.title = 'TextEditor';
        // }, 1000);
        // setInterval(() => {
        //   document.title = 'TextEditor - Darkmode';
        // }, 1500);
      }
      else{
        setmode('light')
        document.body.style.backgroundColor='white'
        showalert("Lightmode enabled","success")
        document.title = 'TextEditor - Lightmode';
      }
  }
  return (
    <>
    <Router>
    <Navbar title="TextEditor" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <Switch>
          <Route path="/about">
          <About mode={mode}/>
          </Route>
          <Route path="/">
          <Boxtext heading="Change the text pattern here" mode={mode} showalert={showalert}/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
