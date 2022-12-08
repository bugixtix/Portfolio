import React, {useEffect, useState} from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$, _window768$, _window427$ } from "../lainy";
import './style.css'


export default function B_H (prop) {
    let [winWidth_$, setWinWidth] = useState(window.innerWidth)

    useEffect(()=>{
        setWinWidth(window.innerWidth)
    },[winWidth_$])
    console.log(winWidth_$)
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
        padding:'0.8rem 0.8rem',
        borderTop:'3px solid red',
        textAlign:'left',
        width:'90%'
    }
    var in1div_1 = {
        height:'80%', margin:'10% 0px 0px 0px',
        display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',

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
        width:dynamicStyle$('40vw',_window768$(winWidth_$),'60vw'),
    }
    var in2div___ ={
        display:'flex',flexDirection:'column',justifyContent:'center',
        width:dynamicStyle$('18vw',_window768$(winWidth_$),'30vw'),
    }


    var outDiv_3 = {
        display:'flex',flexDirection:'row', alignItems:'space-between', justifyContent:'space-between',
        margin:'4rem 7vw'
    }
    return(

        <div style={main_}>

        
        <div style={outDiv_1}>
            <div style={navDiv_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
            </div>

            <div style={in1div_}>
                <div style={in1div_1}>
                <h2 style={h2_s} className={'_700 uppercase black _70'}>ixtix</h2>
                <p style={p_s} className={'_500  darkblue _28'}>description you want</p>
                </div>
                <p style={p_1} className={'_500 uppercase red _24'}>looking for something specific</p>
            </div>
        </div>

        <div style={outDiv_2}>
            {   !_window768$(winWidth_$) &&
                <div style={in2div_}>
                <CARD_M/>
                <CARD_M/>
            </div>}
            <div style={in2div__}>
                <CARD_L winWidth_$={winWidth_$}/>
                <ITEM_XS/>
            </div>
            <div style={in2div___}>
                <CARD_S winWidth_$={winWidth_$}/>
                <CARD_S winWidth_$={winWidth_$}/>
                <CARD_S winWidth_$={winWidth_$}/>
            </div>
        </div>

        <div style={outDiv_3}>
                <Article_x/>
                <Article_x/>
                <Article_x/>
        </div>
        <div style={outDiv_3}>
                <Article_x/>
                <Article_x/>
                <Article_x/>
        </div>
        
        <div style={outDiv_2}>
            <div style={in2div_}>
                <CARD_M/>
                <CARD_M/>
            </div>
            <div style={in2div__}>
                <CARD_L winWidth_$={winWidth_$}/>
                <ITEM_XS/>
            </div>
            <div style={in2div___}>
                <CARD_S winWidth_$={winWidth_$}/>
                <CARD_S winWidth_$={winWidth_$}/>
                <CARD_S winWidth_$={winWidth_$}/>
            </div>
        </div>


        </div>
    )
}

var CARD_S = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',
        width:'100%', margin:'0rem 0px 2rem 0px', padding:dynamicStyle$('0px 0px 0px 24px', _window768$(prop.winWidth_$),'0px 0px 0px 16px')
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:'150px',
        borderRadius:'8px',
    }
    var p_1 = {

    }
    var p_2 = {
        
    }
    var txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'
    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <p style={p_1} className={'gray _18 _500'}> outcoming date</p>
            <p style={p_2} className={'black _20 _600 '}> {txt} </p>
        </div>
    )
}

var CARD_M = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',
        width:'100%',padding:'0px 24px 0px 0px ',margin:'0rem 0px 3rem 0px'
    }
    var imgDiv_ = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'200px',
        borderRadius:'8px',

    }
    var p_1 = {
        padding:'4px 0px'
    }
    var p_2 = {
        padding:'4px 0px',
        
    }

    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'

    return(
        <div style={outDiv_s}>
            <div style={imgDiv_}></div>
            <p style={p_1} className={'gray _20 _500'}> outcoming date</p>
            <p style={p_2} className={'black _22 _600 '}>{txt}</p>
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
        borderRadius:'8px',
    }
    var in1div_ = {
        display:'flex',flexDirection:'column',
    }
    var p_1 = {
        padding:' 4px 0px',
    }
    var p_2 = {
        padding:dynamicStyle$('4px 0px 2em 0px',_window768$(prop.winWidth_$),'4px 0px 1em 0px'), width:'80%'
    }
    var p_3 = {
        padding:' 4px 0px',
    }
    var span_s = {
        padding:' 8px 0px',
    }
    
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <div style={in1div_}>
                <p style={p_1} className={'gray _22 _500'}> outcoming </p>
                <p style={p_2} className={'black _38 _800'}> Title </p>
                <p style={p_3} className={'black _22 _500 '}> {txt} </p>
                <span style={span_s} className={'_20 _500'}>READ MORE</span>
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
        borderRadius:'8px',

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

    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
    return(
        <div style={outDiv_s}>

            <div style={img_s}></div>
            <div style={inDiv_s}>
                <p style={p_1} className={'gray _20 _500'}>outcoming</p>
                <p style={p_2} className={'black _20 _600 '}>{txt}</p>
            </div>
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
        borderRadius:'8px',

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
    
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'

    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <p style={p_1} className={'gray _20 _500'}> outcoming date</p>
            <p style={p_2} className={'black _28 _600 '}> Title of article</p>
            <p style={p_3}> {txt} </p>
            <span style={span_s} className={'_20 _500'}>Read more</span>
        </div>
    )
}