
import './components/style.css';
// Setting
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// COMPONENTS
import {Footer, Navbar} from './components/Home_';
import  { Home_Interface } from './components/Home_'
import { Fragment } from 'react';
import {useState, useEffect} from 'react';
import Blog_Site from './blog/Blog_Site';
function App() {

  let dark_local =  JSON.parse(localStorage.getItem('dark')) || false
  let [dark_$, setDark_$] = useState(dark_local)
  
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
  let Blog = () =>{
    return(
      <Fragment>
        <Navbar darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$}/>
        <Blog_Site darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$}/>
        <Footer darkMode_$={dark_$}/>
      </Fragment>
    )
  }
  let Dom = () =>{
    return(
      <Fragment>
        <Home_Interface darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$}/>
      </Fragment>
    )
  }

  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Dom/> } /> 
      <Route path='/abc' exact element={<Abc/>} />
      <Route path='/article' exact element={<Blog/>}/>
    </Routes>
    </div>
     </BrowserRouter> 
  );
}

export default App;
