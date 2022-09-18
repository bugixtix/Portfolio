import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// STYLE
import './style.css'
import './media-style.css'
import './darked.css'
// ICONS
import {VscColorMode} from 'react-icons/vsc'
import {BsFillBugFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {FaRegMoon} from 'react-icons/fa'

export default function Navbar (prop){
    // prop.state.setDarkMode_$((prev)=>{return localStorage.getItem('dark')})
    // toggle dark mode btn
    let toggleMode = () =>{
        prop.state.setDarkMode_$((prev)=>!prev)
        let y = !prop.state.darkMode_$ ? true : false
        localStorage.setItem('dark', JSON.stringify(y))
    }
    // 
    

    // styling on dark mode
    var toggleStyle = (x) => {
        return prop.state.darkMode_$ ? (x=='header' ? 'header_da--' : x=='logo_icon' ? 'logo_da--icon' : x=='logo_text'?'logo_da--text': x=='title_btn' ? 'title_I_da_btn': x=='options_btn' ? 'options_da_btn':x=='options_li' ? 'options_da--li' : x=='mode_' ? 'mode_da_' : 'UNDEFINED ITEM') : (x=='header' ? 'header--' : x=='logo_icon' ? 'logo--icon' : x=='logo_text'?'logo--text': x=='title_btn' ? 'title_I_btn' : x=='options_btn' ? 'options_btn':  x=='options_li' ? 'options--li' : x=='mode_' ? 'mode_' : 'UNDEFINED ITEM')
    }
    // 

    // small screen logo function
    var SSLogo = () =>{
        return(
            <a href="/" className="title_I_a">
                <button className={toggleStyle('title_btn')}>
                    FULL BUGS
                </button>
            </a>
        )
    }

    // options btn on small screens (425px)
    var [clicked_$, setClicked_$] = useState(false)
    var [appearance_$, setAppearance_$] = useState(false)
    var ToggleList = () =>{
    }

    var OptionsList = ()=>{

        return(
            <ul className={`options_list-- ${!appearance_$ && 'none'}`}>
                <a className={`options_list ${prop.state.darkMode_$ && 'options_da_list'}`} href="#">  Home </a>
                <a className={`options_list ${prop.state.darkMode_$ && 'options_da_list'}`} href="">  About </a>
                <a className={`options_list ${prop.state.darkMode_$ && 'options_da_list'}`} href="/">  Contact </a>
            </ul>
        )
    }

    var OptionsBtnHandler = () => {
        setClicked_$(prev=>!prev)
        setAppearance_$(prev=>!prev)
    } 

    var OptionsBtn = () =>{

        return(
            <button  className={toggleStyle('options_btn')} onClick={OptionsBtnHandler} >
                <BsFillBugFill className={`transition  ${clicked_$ ? 'rotate180' : 'rotate_back'}`} />
                {OptionsList()}
            </button>
        )
    }
    
    // id={prop.state.winWidth_$ < 425 && 'rotate180'}
    return(
        <header className={ toggleStyle('header') }>
            <div className="logo--">
           <Link to={'/'} className='link_' > 
            <button className={ toggleStyle('logo_icon') } >
                <BsFillBugFill/>
            </button> 
            </Link>

            {(prop.state.winWidth_$ < 427) ?   <OptionsBtn/>  : <div></div>}

            <Link to={'/'}  className='link_'> 
            <button className={ toggleStyle('logo_text') }>
            IXTIX BUGY
            </button> 
            </Link>

            </div>

            <ul className="options--">
                <Link to={'/'}  className='link_'>
                    <button className={ toggleStyle('options_li') }>
                    Home
                    </button>
                </Link>
                
                <Link to={'/article'} className={`link_`}>
                    <button className={toggleStyle('options_li')}>
                        Article
                    </button>
                 </Link>
                <Link to={'/about'}  className='link_'>
                    <button className={ toggleStyle('options_li') }>
                        About me
                    </button>
                </Link>

                <Link to={'/contact'}  className='link_'>
                <button className={ toggleStyle('options_li') }>
                    Contact me
                </button>
                </Link>

                {prop.state.winWidth_$ < 427 && SSLogo()}
                <button className={ toggleStyle('mode_') } onClick={toggleMode}>
                    {prop.state.darkMode_$ ? <FiSun/> :<FaRegMoon/>}
                </button>

            </ul>

        </header>
    )
}