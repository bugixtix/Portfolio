import React, {useEffect, useState} from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$, _window768$, _window427$, dayOfYear$ } from "../lainy";
import './style.css'


export default function B_H (prop) {
    let [winWidth_$, setWinWidth] = useState(window.innerWidth)

    useEffect(()=>{
        setWinWidth(window.innerWidth)
    },[winWidth_$])
    // console.log(winWidth_$)
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
        display:'flex',flexDirection:dynamicStyle$('row',_window768$(winWidth_$),'unset', _window427$(winWidth_$),'unset'),flexWrap:dynamicStyle$('unset',_window768$(winWidth_$),'wrap',_window427$(winWidth_$),'wrap'),justifyContent:dynamicStyle$('space-between', _window768$(winWidth_$), 'center',_window427$(winWidth_$),'center'), alignItems:'flex-start',
         padding:'20px 0px 0px 0px', margin:dynamicStyle$('2rem 7vw 0px 7vw',_window768$(winWidth_$),'8px 16px', _window427$(winWidth_$),'8px 16px')
    }
    // TO DO: MAKE THE FLEX OF OUTDIV-2 RESPONSIVE WITH FLEXWRAP  
    var in2div_ = {
        display:'flex',flexDirection:dynamicStyle$('column',_window768$(winWidth_$), 'unset'), flexWrap:dynamicStyle$('unset',_window768$(winWidth_$),'wrap'),justifyContent:dynamicStyle$('center', _window768$(winWidth_$), 'space-evenly'),
        width:dynamicStyle$('27vw',_window768$(winWidth_$),'90vw', _window427$(winWidth_$),'90vw'),

    }
    var in2div__ = {
        display:'flex',flexDirection:dynamicStyle$('column',_window427$(winWidth_$), 'unset'),flexWrap:dynamicStyle$('unset',_window427$(winWidth_$),'wrap'),justifyContent:'center',
        width:dynamicStyle$('40vw',_window768$(winWidth_$),'60vw', _window427$(winWidth_$),'90vw'),
    }
    var in2div___ ={
        display:'flex',flexDirection:'column',justifyContent:'center',
        width:dynamicStyle$('18vw',_window768$(winWidth_$),'25vw', _window427$(winWidth_$),'90vw'),
    }


    var outDiv_3 = {
        display:'flex',flexDirection:dynamicStyle$('row', _window768$(winWidth_$),'unset',_window427$(winWidth_$),'uset'),flexWrap:dynamicStyle$('unset',_window768$(winWidth_$),'wrap',_window427$(winWidth_$),'wrap'), alignItems:'space-between', justifyContent:dynamicStyle$('space-between',_window768$(winWidth_$),'center',_window427$(winWidth_$),'center'),
        margin:dynamicStyle$('3rem 5vw 0px 5vw',_window768$(winWidth_$),'1rem', _window427$(winWidth_$),'1rem'),
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
            {!_window768$(winWidth_$) &&
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
            {_window768$(winWidth_$) && 
            <div style={in2div_}>
                <CARD_M winWidth_$={winWidth_$}/>
                <CARD_M winWidth_$={winWidth_$}/>
            </div>}
        </div>

        <div style={outDiv_3}>
                <Article_x winWidth_$={winWidth_$}/>
                <Article_x winWidth_$={winWidth_$}/>
                <Article_x winWidth_$={winWidth_$} lastChild_={true}/>
        </div>
        <div style={outDiv_3}>
                <Article_x winWidth_$={winWidth_$}/>
                <Article_x winWidth_$={winWidth_$}/>
                <Article_x winWidth_$={winWidth_$} lastChild_={true}/>
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
        display:'flex',flexDirection:dynamicStyle$('column',_window427$(prop.winWidth$),'row'),
        width:'100%', margin:dynamicStyle$('0rem 0px 2rem 0px',_window427$(prop.winWidth_$),'0.7rem 0px 0.3rem 0px'), padding:dynamicStyle$('0px 0px 0px 24px', _window768$(prop.winWidth_$),'0px 0px 0px 16px',_window427$(prop.winWidth_$),'0px 8px 0px 8px'),
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:dynamicStyle$('150px',_window427$(prop.winWidth_$),'100px'),
        borderRadius:'8px',
    }
    var p_1 = {
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$), '16px')
    }
    var p_2 = {
        overflowWrap:'break-word', wordWrap:'break-word', 
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$), '16px')
    }
    var inDiv_ = {
        display:'flex',flexDirection:'column',
        padding:'0px 8px'
    }
    var txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'
    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <div style={inDiv_}>
            <p style={p_1} className={'gray _500'}> outcoming date</p>
            <p style={p_2} className={'black _600 '}> {txt} </p>
            </div>
        </div>
    )
}

var CARD_M = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',
        width:dynamicStyle$('100%',_window768$(prop.winWidth_$),'40%'),padding:dynamicStyle$('0px 24px 0px 0px ',_window768$(prop.winWidth_$),'0px 8px',_window427$(prop.winWidth_$),'0px 8px'),margin:dynamicStyle$('0rem 0px 3rem 0px',_window768$(prop.winWidth_$),'1rem 0px 1rem 0px',_window427$(prop.winWidth_$),'1rem 0px 1rem 0px')
    }
    var imgDiv_ = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'200px',
        borderRadius:'8px',

    }
    var p_1 = {
        padding:'4px 0px',
        fontSize:dynamicStyle$('20',_window768$(prop.winWidth_$),'17px', _window427$(prop.winWidth_$),'15px')
    }
    var p_2 = {
        padding:'4px 0px',
        fontSize:dynamicStyle$('20',_window768$(prop.winWidth_$),'18px', _window427$(prop.winWidth_$),'16px')
        
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
        padding:dynamicStyle$(' 4px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
    }
    var p_2 = {
        padding:dynamicStyle$('4px 0px 12px 0px',_window768$(prop.winWidth_$),'4px 0px 8px 0px',_window427$(prop.winWidth_$),'4px 0px 8px 0px'), width:'80%',
    }
    var p_3 = {
        padding:dynamicStyle$(' 4px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
    }
    var span_s = {
        padding:dynamicStyle$(' 8px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
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
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$),'16px', _window427$(prop.winWidth_$),'15px')
    }
    var p_2 = {
        lineHeight:'0.9em', letterSpacing:'1px',
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$),'16px', _window427$(prop.winWidth_$),'15px')
    }

    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
    return(
        <div style={outDiv_s}>

            <div style={img_s}></div>
            <div style={inDiv_s}>
                <p style={p_1} className={'gray _500'}>outcoming</p>
                <p style={p_2} className={'black _600 '}>{txt}</p>
            </div>
        </div>
    )
}

var Article_x = (prop) => {


    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',
        width:dynamicStyle$('25vw',_window768$(prop.winWidth_$),dynamicStyle$('45%',prop.lastChild_,'90%'),_window427$(prop.winWidth_$),dynamicStyle$('44%',prop.lastChild_,'90%')), margin:'8px'
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:dynamicStyle$('200px',_window768$(prop.winWidth_$),'160px',_window427$(prop.winWidth_$),'140px'),
        borderRadius:'8px',

    }
    var p_1 = {
        color:'#aaa',
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        fontSize:dynamicStyle$('20px', _window768$(prop.winWidth$), '18px', _window427$(prop.winWidth_$),'16px')
    }
    var p_2 = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        fontSize:dynamicStyle$('28px', _window768$(prop.winWidth$), '22px', _window427$(prop.winWidth_$),'20px')
    }
    var p_3 = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
    }
    var span_s = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px')
    }
    
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'

    return(
        <div style={outDiv_s}>
            <div style={img_s}></div>
            <p style={p_1} className={'gray _500'}> outcoming date</p>
            <p style={p_2} className={'black _600 '}> Title of article</p>
            <p style={p_3}> {txt} </p>
            <span style={span_s} className={'_20 _500'}>Read more</span>
        </div>
    )
}