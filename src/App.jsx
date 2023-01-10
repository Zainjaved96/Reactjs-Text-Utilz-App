import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alerts from './components/Alerts'
import About from './components/About'
import ReactDOM from "react-dom/client";
import Sample from './components/Sample'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";
import ToneAnalyzer from './components/ToneAnalyzer'

function App() {
  const [alert,setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  function toggleMode(){
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#203e77";
      document.title = "Text Utilz - Dark Mode";
      showAlert("Dark Mode has been Enables", "success")
      
    }
    else if (mode=="dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Utilz - Light Mode";
      showAlert("Light Mode has been Enables", "success")
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}


  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode = {toggleMode} />
      {/* <Alerts alert={alert} /> */}
      {/* Switch for routing */}
      <Switch>
      <Route exact path='/'>
          <div className='main--page'>
            <Home/>
            <About/>
            <Sample/>
          </div>
          
        </Route>
        <Route exact path='/text-form'>
          <TextForm mode={mode} showAlert={showAlert} />
        </Route>
        <Route exact path='/about'>
            <About />
        </Route>
      </Switch>
      </Router>
    </>
   
  )
}

export default App
