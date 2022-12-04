import React,{useEffect} from "react";
import { dynamicStyle$, _window427$, _window768$ } from "../lainy";
import { Navbar } from "./Home_";
import './style.css'

export default function About_ (prop){


    var main_ = {
        width:'100%',
        // height:dynamicStyle$('90vh',_window768$(),'auto',_window427$(),'auto'),
        height:dynamicStyle$('100vh',_window768$(),'auto',_window427$(),'auto'),
        background:'#7E89FD',
        
    }
    var outDiv_s = {
        width:'100%',
        display:'flex',
        flexDirection:dynamicStyle$('row',_window768$(),'column',_window427$(),'column'),
        alignItems:'center',
        justifyContent:'center',
        padding:dynamicStyle$('0px',_window768$(),'2em 0em 0em 0em', _window427$(),'2em 0em 0em 0em')
    }
    var in1Div_ = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:dynamicStyle$('0px 0em 0px 4em', _window768$(),'0px 3em',_window427$(),'0px 30px'),
        width:dynamicStyle$('40%', _window768$(),'100%',_window427$(),'100%'),
    }
    var in2Div_ = {
        width:dynamicStyle$('50%',_window768$(),'100%',_window427$(),'100%'),
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'0px 0em 0px 0em',
    }
    var img_s = {
        width:'100%',
    }
    var h2_s = {
        padding:'8px 0px',
        color:'#fff'
    }
    var p_s = {
        color:'#fff'
    }
    return(
        <div style={main_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
        <div style={outDiv_s}>
            <div style={in1Div_}>
                <h2 style={h2_s} className={'uppercase _42 _600'}>about us</h2>
                <p style={p_s}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div style={in2Div_}>
            <img style={img_s} src={require('../imges/webdev.jpg')}></img>
            </div>
        </div>
        </div>
    )
}