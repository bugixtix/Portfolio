import React from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$ } from "../lainy";
import './style.css'

export default function B_H (prop) {

    var outDiv_s = {
        // minHeight:'100vh',
        width:'100vw',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
    }
    var navDiv_ = {
        position:'fixed',
        width:'100%',
    }
    var outDiv_1 = {
        background:`${dynamicStyle$('linear-gradient(#000,#111)',!prop.darkMode_$,'linear-gradient(#e66465, #9198e5)')},url(${require('../imges/wallpaper_.png')})`,
        width:'100%',
        height:'90vh',
        backgroundPosition:'left',
        display:'flex',
        flexDirection:'column',
        backgroundBlendMode:'saturation'
    }
    var h2_s = {
        textAlign:'center'
    }
    var p_s = {
        textAlign:'center'
    }
    var line_ = {
        padding:'20px 0px',
        height:'1px',
        width:'100%',
        
    }

    return(

        <div style={outDiv_s}>
            <div style={navDiv_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
            </div>

            <div style={outDiv_1}>
                <h2 style={h2_s}>title you want</h2>
                <p style={p_s}>description you want</p>
                <p style={line_}></p>
            </div>
        </div>
    )
}