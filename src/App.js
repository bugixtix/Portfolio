
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
  let Article = () =>{
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
        
    return(
      <Fragment>
        <B_H darkMode_$={dark_$} setDarkMode_$={setDark_$} winWidth_$={winWidth_$} />
        <Footer darkMode_$={dark_$}/>
      </Fragment>
    )
  }
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
      <Route path="/" exact element={<Dom/> } /> 
      <Route path='/abc' exact element={<Abc/>} />
      <Route path='/article' exact element={<Article/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/contact' exact element={<Contact/>}/>
      <Route path='/blog' exact element={<Blog_Home/>}/>

      <Route path={`/blog/${'S_0'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'S_1'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'S_2'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'S_3'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'S_4'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'S_5'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'L_0'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'L_1'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'XS_0'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'XS_1'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'M_0'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'M_1'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'M_2'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'M_3'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_0'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_1'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_2'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_3'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_4'}`} exact element={<Article/>}/>
      <Route path={`/blog/${'AX_5'}`} exact element={<Article/>}/>
    </Routes>
    </div>
     </BrowserRouter> 
  );
}

export default App;
