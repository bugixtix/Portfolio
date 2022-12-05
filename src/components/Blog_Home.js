import React from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$ } from "../lainy";
import './style.css'

export default function B_H (prop) {

    var main_ = {
        display:'flex',flexDirection:'column',
    }
    var outDiv_1 = {
        // minHeight:'100vh',
        width:'100vw',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
    }
    var navDiv_ = {
        position:'fixed',
        width:'100%',
        zIndex:'999'
    }
    var in1div_ = {
        background:`${dynamicStyle$('linear-gradient(#000,#111)',!prop.darkMode_$,'linear-gradient(#e66465, #9198e5)')},url(${require('../imges/wallpaper_.png')})`,
        width:'100%',
        height:'90vh',
        backgroundPosition:'left',
        display:'flex',
        flexDirection:'column',
        backgroundBlendMode:'saturation',
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        zIndex:'1',
    }
    var h2_s = {
        textAlign:'center',
        padding:'0.8rem 0px ',
        // height:'50%',
    }
    var p_s = {
        textAlign:'center',
        // height:'30%',
    }
    var line_ = {
        margin:'1rem 0px',
        // padding:'20px 0px',
        height:'1px',
        width:'80%',
        background:'#000',
    }
    var p_1 = {
        padding:'0.8rem 0.8rem 0px 0.8rem',
        borderTop:'3px solid red',
        textAlign:'left',
        width:'90%'
    }
    var in1div_1 = {
        height:'85%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',justifyContent:'center',

    }


    var outDiv_2 = {
        display:'flex',flexDirection:'row',justifyContent:'center',
        width:'100%'
    }
    var in2div_ = {
        display:'flex',flexDirection:'column',justifyContent:'center',

    }
    var in2div__ = {
        display:'flex',flexDirection:'column',justifyContent:'center',

    }
    var in2div___ ={
        display:'flex',flexDirection:'column',justifyContent:'center',

    }
    return(

        <div style={main_}>

        
        <div style={outDiv_1}>
            <div style={navDiv_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
            </div>

            <div style={in1div_}>
                <div style={in1div_1}>
                <h2 style={h2_s} className={'_700 uppercase darkblue _42'}>ixtix</h2>
                <p style={p_s}>description you want</p>
                </div>
                <p style={p_1}>looking for something specific</p>
            </div>
        </div>

        <div style={outDiv_2}>
            <div style={in2div_}>
                <CARD_M/>
            </div>
            <div style={in2div__}>

            </div>
            <div style={in2div___}>

            </div>
        </div>

        </div>
    )
}

var CARD_M = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
        width:'30%',padding:'8px', margin:'8px',
    }
    var imgDiv_ = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'left',
        width:'100%', height:'auto'
    }
    var p_1 = {

    }
    var p_2 = {

    }

    return(
        <div style={outDiv_s}>
            <div style={imgDiv_}></div>
            <p style={p_1}> something</p>
            <p style={p_2}> another thing</p>
        </div>
    )
}
