import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
// STYLE
import './style.css'
import './media-style.css'
import './darked.css'
// ICONS
import {BsFillBugFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {FaRegMoon} from 'react-icons/fa'

export default function Navbar (prop){
    // set State to change to the dark / light mode
    let toggleMode = () =>{
        prop.state.setDarkMode_$((prev)=>!prev)
        let y = !prop.state.darkMode_$ ? true : false
        localStorage.setItem('dark', JSON.stringify(y))
    }
    // 
    

    // styling on dark mode

    // 

    // small screen logo function
    var SSLogo = () =>{
        return(
            <a href="/" className="a_">
                <button className={'btn_'}>
                    FULL BUGS
                </button>
            </a>
        )
    }

    // state$ to check if btn was clicked , another state to hide btn
    var [clicked_$, setClicked_$] = useState(false)
    var [appearance_$, setAppearance_$] = useState(false)

    var OptionsList = ()=>{

        var ul_ = {
            position:'absolute',
            left:'-16px',
            top:'48px',
            display:'flex',
            flexDirection:'column',
            textAlign:'center',
            flexWrap:'wrap',
            padding:'0px',
        }
        var a_0 = {
            minWidth:'50px',
            textDecoration:'none',
            padding:'12px',
            backgroundColor:'rgba(300,300,300,0.65)',
            color:'#000',
            fontWeight:'500',
            position:'relative',
            transition:'all ease 550ms'
        }
        return(
            <ul style={ul_} className={`ul_ ${!appearance_$ && 'none'}`}>
                <a style={a_0} className='a_0' href="#">  Home </a>
                <a style={a_0} className='a_0' href="">  About </a>
                <a style={a_0} className='a_0' href="/">  Contact </a>
            </ul>
        )
    }

    var OptionsBtnHandler = () => {
        setClicked_$(prev=>!prev)
        setAppearance_$(prev=>!prev)
    } 

    var btn_1 = {
        height:'100%',
        borderRadius:'100%',
        padding:'2px 10px 0px 10px',
        backgroundColor:'#fff',
        marginRight:'4px',
        border:'none',
        cursor:'pointer',
        transition:'all ease 550ms',
        position:'relative',
    }

    var OptionsBtn = () =>{

        return(
            <button style={btn_1} className={'btn_1'} onClick={OptionsBtnHandler} >
                <BsFillBugFill className={`transition  ${clicked_$ ? 'rotate180' : 'rotate_back'}`} />
                {OptionsList()}
            </button>
        )
    }

    var outDiv_1 = {
        display:'flex',
        flexDirection:'row',
        height:'100%',
    }

    var ul_1 = {
        listStyle:'none',
        display:'flex',
        flexDirection:'row',
        height:'100%',
        margin:'0px',
    }
    var btn_5 = {
        position:'relative',
        height:'100%',
        backgroundColor:'#fff',
        fontWeight:'500',
        transition:'all ease 300ms',
        padding:'6px 12px 2px 12px',
        border:'none',
        cursor:'pointer',
        minWidth:'0px',
    }    
    return(
        <header className={'header'}>
            <div style={outDiv_1} className="logo--">
           <Link to={'/'} className='link_' > 
            <button className={'btn_2'} >
                <BsFillBugFill/>
            </button> 
            </Link>

            {(prop.state.winWidth_$ < 427) ?   <OptionsBtn/>  : <div></div>}

            <Link to={'/'}  className='link_'> 
            <button className={ 'btn_3' }>
            IXTIX BUGY
            </button> 
            </Link>

            </div>

            <ul style={ul_1} className="options--">
                <Link to={'/'}  className='link_'>
                    <button className={ 'btn_4' }>
                    Home
                    </button>
                </Link>
                
                <Link to={'/article'} className={`link_`}>
                    <button className={'btn_4'}>
                        Article
                    </button>
                 </Link>
                <Link to={'/about'}  className='link_'>
                    <button className={ 'btn_4'}>
                        About me
                    </button>
                </Link>

                <Link to={'/contact'}  className='link_'>
                <button className={ 'btn_4' }>
                    Contact me
                </button>
                </Link>

                {prop.state.winWidth_$ < 427 && SSLogo()}
                <button style={btn_5} className={ 'mode_' } onClick={toggleMode}>
                    {prop.state.darkMode_$ ? <FiSun/> :<FaRegMoon/>}
                </button>

            </ul>

        </header>
    )
}