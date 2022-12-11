
import './components/style.css';
// Setting
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// COMPONENTS
import {Footer, Navbar} from './components/Home_';
import  { Home_Interface } from './components/Home_'
import { Fragment } from 'react';
import {useState, useEffect} from 'react';
import Blog_Site from './blog/Blog_Site';
import About_ from './components/About_';
import { Contact_ } from './components/Contact_';
import B_H from './components/Blog_Home';
function App() {

  let dark_local =  JSON.parse(localStorage.getItem('dark')) || false
  let [dark_$, setDark_$] = useState(dark_local)
  let [page_$, setPage_$] = useState('')
  
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
        <Blog_Site darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$} />
        <Footer darkMode_$={dark_$}/>
      </Fragment>
    )
  }
  let Dom = () =>{
    return(
      <Fragment>
        <Home_Interface darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$} />
      </Fragment>
    )
  }

  let About = () =>{
    return(
      <Fragment>
        {/* <Navbar darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$}/> */}
        <About_ darkMode_$={dark_$} winWidth_$={winWidth_$} setDarkMode_$={setDark_$} />
        <Footer darkMode_$={dark_$}/>
      </Fragment>
    )
  }

  let Contact = () => {
    return(
    <Fragment>
      {/* <Navbar darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} setWinWidth_$={setWinWidth_$}/> */}
      <Contact_ darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} />
      <Footer darkMode_$={dark_$}/>
    </Fragment>
    )
  }

  let Blog_Home = () => {
        let x = 1 ;
        useEffect(()=>{
          var cursor = document.querySelector('.cursor-inner');
          var cursor_ = document.querySelector('.cursor-outer');
          document.addEventListener('mousemove',e=>{
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
            cursor_.style.top = e.pageY + 'px';
            cursor_.style.left = e.pageX + 'px';
          })
        },[x])
    return(
      <Fragment>
        <B_H darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} />
        <Footer darkMode_$={dark_$}/>
        <div className='cursor-outer'></div>
        <div className='cursor-inner'></div>
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
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='/bloghome' exact element={<Blog_Home/>}/>
    </Routes>
    </div>
     </BrowserRouter> 
  );
}

export default App;
