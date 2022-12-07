import React from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$ } from "../lainy";
import './style.css'

export default function B_H (prop) {

    var main_ = {
        display:'flex',flexDirection:'column',
    }
    var outDiv_1 = {
        height:'100vh',
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
        height:'100%',
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
        display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'flex-start',
         padding:'20px 0px 0px 0px', margin:'100px 7vw'
    }
    var in2div_ = {
        display:'flex',flexDirection:'column',justifyContent:'center',
        width:'27vw',

    }
    var in2div__ = {
        display:'flex',flexDirection:'column',justifyContent:'center',
        width:'40vw',
    }
    var in2div___ ={
        display:'flex',flexDirection:'column',justifyContent:'center',
        width:'18vw',

    }


    var outDiv_3 = {
        display:'flex',flexDirection:'row', alignItems:'space-between', justifyContent:'space-between',
        margin:'0px 7vw'
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
                <CARD_M/>
            </div>
            <div style={in2div__}>
                <CARD_L/>
                <ITEM_XS/>
            </div>
            <div style={in2div___}>
                <CARD_S/>
                <CARD_S/>
                <CARD_S/>
            </div>
        </div>

        <div style={outDiv_3}>
                <Article_x/>
                <Article_x/>
                <Article_x/>
        </div>

        </div>
    )
}

var CARD_M = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',
        width:'100%',padding:'0px 24px 0px 0px ',margin:'0px 0px 36px 0px'
    }
    var imgDiv_ = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'200px'
    }
    var p_1 = {
        padding:'4px 0px'
    }
    var p_2 = {
        padding:'4px 0px'
        
    }

    return(
        <div style={outDiv_s}>
            <div style={imgDiv_}></div>
            <p style={p_1}> something</p>
            <p style={p_2}> another thing</p>
        </div>
    )
}

var CARD_L = (prop) => {

    var outDiv_s = {
        display:'flex', flexDirection:'column', 
        width:'100%', padding:'0px 8px', margin:'0px 0px 8px 0px'
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'400px',
    }
    var in1div_ = {
        display:'flex',flexDirection:'column',
    }
    var p_1 = {
        padding:' 4px 0px',
    }
    var p_2 = {
        padding:' 4px 0px', width:''
    }
    var p_3 = {
        padding:' 4px 0px',
    }
    var span_s = {
        padding:' 8px 0px',
    }

    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <div style={in1div_}>
                <p style={p_1}> outcoming </p>
                <p style={p_2}> Title </p>
                <p style={p_3}> description </p>
                <span style={span_s}>READ MORE</span>
            </div>
        </div>
    )
}
var ITEM_XS = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'row',
        padding:'0px 8px', margin:'8px 0px',
        width:'100%'
    }

    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'30%', height:'100px',
    }
    var inDiv_s = {
        display:'flex', flexDirection:'column',
        padding:'0px 8px', width:'70%',
    }
    var p_1 = {
        // width:'auto'
    }
    var p_2 = {
        // width:'auto'
        lineHeight:'0.9em', letterSpacing:'1px'
    }
    return(
        <div style={outDiv_s}>

            <div style={img_s}></div>
            <div style={inDiv_s}>
                <p style={p_1}>outcoming</p>
                <p style={p_2}>Title, description or any text you add to add, to let audience know, what this thing is about</p>
            </div>
        </div>
    )
}
var CARD_S = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',
        width:'100%', margin:'0px 0px 16px 0px', padding:'0px 0px 0px 24px'
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:'150px',
    }
    var p_1 = {

    }
    var p_2 = {
        
    }
    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <p style={p_1}> outcoming date</p>
            <p style={p_2}> description </p>
        </div>
    )
}

var Article_x = (prop) => {


    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',
        width:'25vw', margin:'8px'
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:'200px',
    }
    var p_1 = {
        color:'#aaa',
        padding:'4px'
    }
    var p_2 = {
        padding:'4px 4px'
    }
    var p_3 = {
        padding:'4px'
    }
    var span_s = {
        padding:'4px 4px'
    }

    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <p style={p_1}> outcoming date</p>
            <p style={p_2}> Title of article</p>
            <p style={p_3}> description </p>
            <span style={span_s}>Read more</span>
        </div>
    )
}