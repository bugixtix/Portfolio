
import './App.css';
import './components/darked.css'
// Setting
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// COMPONENTS
import Navbar from './components/Navbar_';
import Home from './components/Home_'
import Features from './components/Features_'
import Articles from './components/Articles_';
import Contact from './components/Contact_';
import { Fragment } from 'react';
import {useState, useEffect} from 'react';
function App() {
  let [dark_$, setDark_$] = useState(false)
  
  let [winWidth_$, setWinWidth_$] = useState(window.innerWidth)
  let setWindowWidth = () => {
    setWinWidth_$(window.innerWidth)
  }



  window.addEventListener('resize', setWindowWidth)

  let Abc = () =>{
    return(
      <Fragment>
        <h1>
          ABC ROUTE is Here BITCHES!
        </h1>
      </Fragment>
    )
  }
  let Dom = () =>{
    return(
      <Fragment>

        <Navbar 
        state = {{darkMode_$ : dark_$, setDarkMode_$ : setDark_$ , winWidth_$ : winWidth_$ , setWinWidth_$ : setWinWidth_$}}
        />

        <Home
        state = {{darkMode_$ : dark_$}}
        />

        <Features
        state = {{darkMode_$ : dark_$}}
        />

        <Articles
        state = {{darkMode_$ : dark_$}}
        />

        <Contact
        state = {{darkMode_$ : dark_$}}
        />
        {/* <Link to={'/abc'} >Here</Link> */}

      </Fragment>
    )
  }

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Dom/> } /> 
      <Route path='/abc' exact element={<Abc/>} />
    </Routes>
    </div>
     </BrowserRouter> 
  );
}

export default App;
