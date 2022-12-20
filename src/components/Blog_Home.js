import React, {useEffect, useState} from "react";
import { Navbar } from "./Home_";
import { dynamicStyle$, _window768$, _window427$, dayOfYear$, notdo$ } from "../lainy";
import './style.css'


export default function B_H (prop) {
    let [winWidth_$, setWinWidth] = useState(window.innerWidth)

    let [cs_L_001, setCs_L_001] = useState(0)
    useEffect(()=>{
        setWinWidth(window.innerWidth)
    },[winWidth_$])
    var main_ = {
        display:'flex',flexDirection:'column',
        background:dynamicStyle$('transparent',prop.darkMode_$,'#010c1d')
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
        zIndex:'999',
        display:'flex',flexDirection:'column',
    }
    var in1div_ = {
        background:`${dynamicStyle$('linear-gradient(#1a1d31,#2b2e42)',!prop.darkMode_$,'linear-gradient(#000, #111)')},url(${require('../imges/wallpaper_.png')})`,
        width:'100%',
        height:'100%',
        backgroundPosition:'left',
        display:'flex',
        flexDirection:'column',
        backgroundBlendMode:dynamicStyle$('color-dodge',prop.darkMode_$,'luminosity'),
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        zIndex:'1',
    }
    var h2_s = {
        textAlign:'center', color:dynamicStyle$('010c1d',prop.darkMode_$,'#f1dac4'),
        padding:'0.8rem 0px ',
        // height:'50%',
    }
    var p_s = {
        textAlign:'center', color:dynamicStyle$('#edf2f4',prop.darkMode_$,'#ffff33cc')
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
        width:'90%',padding:'0.8rem 0.8rem',
        borderTop:'3px solid red',
        textAlign:'left',color:dynamicStyle$('#161b33',prop.darkMode_$,'#ffff33bb')
        
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

    let x = 1 ;
        useEffect(()=>{
          var cursor = document.querySelector('.cursor-inner');
          var cursor_ = document.querySelector('.cursor-outer');
          document.addEventListener('mousemove',e=>{
            cursor.style.top = e.pageY-4 + 'px';
            cursor.style.left = e.pageX-2 + 'px';
            cursor_.style.top = e.pageY + 'px';
            cursor_.style.left = e.pageX + 'px';
          })
        },[x])

        function updateProgressBar(){
            const {scrollTop,scrollHeight} = document.documentElement
            const scrollPercent = scrollTop/(scrollHeight-window.innerHeight)*100+'%'
            document.querySelector('.progress-bar').style.setProperty('--progress',scrollPercent)
        }
        useEffect(()=>{
            let siteLocation= window.location.href
            if(siteLocation.includes('blog')){
            window.addEventListener('scroll',updateProgressBar)
                var barColor_=prop.darkMode_$?'#a69cac':'#ff3'
                var barColor=prop.darkMode_$?'#fff':'linear-gradient(217deg,rgba(255,0,0,.8),rgba(255,0,0,0) 70.71%),linear-gradient(127deg, rgba(0,255,0,.8),rgba(0,255,0,0)70.71%),linear-gradient(336deg, rgba(0,0,255,.8),rgba(0,0,255,0)70.71%)'
                document.querySelector('.progress-bar').style.setProperty('--color',barColor_);
            }
                
                
        },[x])

        var handleCLICK_001 = () => {
            window.location.assign('/special')
        }
        useEffect(()=>{
            var CLICK_001D = document.querySelector('#CLICK_001')
            CLICK_001D.addEventListener('click',handleCLICK_001)
        },[x])

        var CLICK_S = (e) => {
            // var y = event.target.id===id_ ? event.target : event.target.closest(id_)
            console.log('/article/'+e.currentTarget.id)
        }
    return(

        <div style={main_} className={'BLOGHOME'}>        
        <div style={outDiv_1}>
            <div style={navDiv_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
            <div className="progress-bar"></div>
            </div>

            <div style={in1div_} className='txt_'>
                <div style={in1div_1}>
                <h2 style={h2_s} className={'_700 uppercase _70'}>ixtix</h2>
                <p style={p_s} className={'_500  _28'}>description you want</p>
                </div>
                <p style={p_1} className={'_500 uppercase _24'} id={'CLICK_001'}>looking for something specific</p>
            </div>
        </div>

        <div style={outDiv_2}>
            {!_window768$(winWidth_$) &&
            <div style={in2div_}>
                <CARD_M darkMode_$={prop.darkMode_$} id_={'M_0'} title={'xy'}/>
                <CARD_M darkMode_$={prop.darkMode_$} id_={'M_1'}title={'yz'}/>
            </div>}
            <div style={in2div__}>
                <CARD_L winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'L_0'} cs_001={cs_L_001} setCs_001={setCs_L_001}/>
                <ITEM_XS winWidth$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'XS_0'}/>
            </div>
            <div style={in2div___}>
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_0' />
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_1' />
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_2' />
            </div>
            {_window768$(winWidth_$) && 
            <div style={in2div_}>
                <CARD_M winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'M_0'}/>
                <CARD_M winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'M_1'}/>
            </div>}

            
                <div className='cursor-outer'></div>
                <div className='cursor-inner'></div>
        </div>

        <div style={outDiv_3}>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_0'}/>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_1'}/>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_2'}lastChild_={true}/>
        </div>
        <div style={outDiv_3}>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_3'}/>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_4'}/>
                <Article_x winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'AX_5'} lastChild_={true}/>
        </div>
        
        <div style={outDiv_2}>
            <div style={in2div_}>
                <CARD_M winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'M_2'}/>
                <CARD_M winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'M_3'}/>
            </div>
            <div style={in2div__}>
                <CARD_L winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'L_1'} cs_001={cs_L_001} setCs_001={setCs_L_001}/>
                <ITEM_XS winWidth$={winWidth_$} darkMode_$={prop.darkMode_$} id_={'XS_1'}/>
            </div>
            <div style={in2div___}>
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_3'/>
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_4'/>
                <CARD_S winWidth_$={winWidth_$} darkMode_$={prop.darkMode_$} id_='S_5'/>
            </div>
        </div>


        </div>
    )
}

var CARD_S = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:dynamicStyle$('column',_window427$(prop.winWidth$),'row'),
        width:'100%', margin:dynamicStyle$('0rem 0px 2rem 0px',_window427$(prop.winWidth_$),'0.7rem 0px 0.3rem 0px'), padding:dynamicStyle$('0px 0px 0px 24px', _window768$(prop.winWidth_$),'0px 0px 0px 16px',_window427$(prop.winWidth_$),'0px 8px 0px 8px'),
        cursor:'pointer',
        zIndex:'2',position:'relative'
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:dynamicStyle$('150px',_window427$(prop.winWidth_$),'100px'),
        borderRadius:'8px',
    }
    var p_1 = {
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$), '16px'), color:dynamicStyle$('#a69cac',prop.darkMode_$,'#8d99ae'),
    }
    var p_2 = {
        overflowWrap:'break-word', wordWrap:'break-word', 
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$), '16px'), color:dynamicStyle$('#000', prop.darkMode_$,'#ef233c'),
    }
    var inDiv_ = {
        display:'flex',flexDirection:'column',
        padding:'0px 8px'
    }
    var txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr?'
    var x = 1
    var handleCLICK = (event)=>{
        var y = event.target.id==='CLICK_010' ? event.target : event.target.closest('#CLICK_010')
        console.log(y)
    }
    // useEffect(()=>{
    // var CLICK_010D = document.querySelector('.S_outDiv')
    // CLICK_010D.addEventListener('click',(e)=>{
    //     let y = e.currentTarget
    //     console.log(y)
    // })},[1])
    var CLICKED_=(e)=>{
        var id_ = e.currentTarget.id
        window.location.assign(`${window.location}/${id_}`)
    }
    var MOUSEENTER_=(e)=>{
        // console.log(e.currentTarget + '::enter')
    }
    var MOUSELEAVE_=(e)=>{
        // console.log(e.currentTarget + '::leave')
    }
    return(
        <div style={outDiv_s} id={prop.id_} className={'S_outDiv'} onClick={(e)=>{CLICKED_(e)}} onMouseEnter={(e)=>{MOUSEENTER_(e)}} onMouseLeave={(e)=>{MOUSELEAVE_(e)}}>
            <div style={img_s}></div>
            <div style={inDiv_}>
            <p style={p_1} className={'_500'}> outcoming date</p>
            <p style={p_2} className={'S_title _600'}> {txt} </p>
            </div>
        </div>
    )
}

var CARD_M = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'flex-start',
        width:dynamicStyle$('100%',_window768$(prop.winWidth_$),'40%'),padding:dynamicStyle$('0px 24px 0px 0px ',_window768$(prop.winWidth_$),'0px 8px',_window427$(prop.winWidth_$),'0px 8px'),margin:dynamicStyle$('0rem 0px 3rem 0px',_window768$(prop.winWidth_$),'1rem 0px 1rem 0px',_window427$(prop.winWidth_$),'1rem 0px 1rem 0px'),
        cursor:'pointer'
    }
    var imgDiv_ = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'200px',
        borderRadius:'8px',

    }
    var p_1 = {
        padding:'4px 0px',
        fontSize:dynamicStyle$('20',_window768$(prop.winWidth_$),'17px', _window427$(prop.winWidth_$),'15px'),color:dynamicStyle$('#8d99ae',prop.darkMode_$,'#8d99ae'),
    }
    var p_2 = {
        padding:'4px 0px',
        fontSize:dynamicStyle$('20',_window768$(prop.winWidth_$),'18px', _window427$(prop.winWidth_$),'16px'),color:dynamicStyle$('#010c1d',prop.darkMode_$,'#ff3'),
        
    }

    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod'

    var run = () => {
        console.log(prop.title)
    }
    var CLICKED_=(e)=>{
        var id_ = e.currentTarget.id
        window.location.assign(`${window.location}/${id_}`)
    }
    var MOUSEENTER_=(e)=>{
        // console.log(e.currentTarget + '::enter')
    }
    var MOUSELEAVE_=(e)=>{
        // console.log(e.currentTarget + '::leave')
    }
    return(
        <div style={outDiv_s} id={prop.id_} className={'M_outDiv'} onClick={e=>CLICKED_(e)} onMouseEnter={e=>MOUSEENTER_(e)} onMouseLeave={e=>MOUSELEAVE_(e)}>
            <div style={imgDiv_}></div>
            <p style={p_1} className={'_20 _500'}> outcoming date</p>
            <p style={p_2} className={'M_title _22 _600 '}>{txt}</p>
        </div>
    )
}

var CARD_L = (prop) => {

    var outDiv_s = {
        display:'flex', flexDirection:'column', 
        width:'100%', padding:'0px 8px', margin:'0px 0px 8px 0px',
        corsor:'pointer',
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%', height:'400px',
        borderRadius:'8px',
        cursor:'pointer',
    }
    var in1div_ = {
        display:'flex',flexDirection:'column',
        cursor:'pointer',
    }
    var p_1 = {
        padding:dynamicStyle$(' 4px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
        color:dynamicStyle$('#8d99ae',prop.darkMode_$, '#8d99ae'),
    }
    var p_2 = {
        padding:dynamicStyle$('4px 0px 12px 0px',_window768$(prop.winWidth_$),'4px 0px 8px 0px',_window427$(prop.winWidth_$),'4px 0px 8px 0px'), width:'80%',
        color:dynamicStyle$('#010c1d',prop.darkMode_$,'#f1dac4'),
    }
    var p_3 = {
        padding:dynamicStyle$(' 4px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
        color:dynamicStyle$('#161b33',prop.darkMode_$,'#fd7f20')
    }
    var span_s = {
        padding:dynamicStyle$(' 8px 0px',_window768$(prop.winWidth_$), '2px 0px', _window427$(prop.winWidth_$),'2px 0px'),
        color:dynamicStyle$('#2b2e42',prop.darkMode_$,'#fdb750')
    }
    
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'

    useEffect(()=>{
    },[])

    var CLICKED_=(e)=>{
        var id_ = e.currentTarget.id
        window.location.assign(`${window.location}/${id_}`)
    }
    var MOUSEENTER_=(e)=>{
        // console.log(e.currentTarget + '::enter')
    }
    var MOUSELEAVE_=(e)=>{
        // console.log(e.currentTarget + '::leave')
    }
    return(
        <div style={outDiv_s} id={`${prop.id_}`} className={`L_outDiv ${prop.id_}`} onClick={e=>CLICKED_(e)} onMouseEnter={e=>MOUSEENTER_(e)} onMouseLeave={e=>MOUSELEAVE_(e)}>
            <div style={img_s}></div>
            <div style={in1div_}>
                <p style={p_1} className={'_22 _500'}> outcoming </p>
                <p style={p_2} className={'L_title _38 _800'}> Title </p>
                <p style={p_3} className={'L_text _22 _500 '}> {txt} </p>
                <span style={span_s} className={'L_more _20 _500'}>READ MORE</span>
            </div>
        </div>
    )
}

var ITEM_XS = (prop) => {

    var outDiv_s = {
        display:'flex',flexDirection:'row',
        padding:'0px 8px', margin:'8px 0px',
        width:'100%',
        cursor:'pointer',
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
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$),'16px', _window427$(prop.winWidth_$),'15px'), color:dynamicStyle$('#8d99ae',prop.darkMode_$,'#8d99ae')
    }
    var p_2 = {
        lineHeight:'0.9em', letterSpacing:'1px',color:dynamicStyle$('#161b33',prop.darkMode_$,'#5cd85e'),
        fontSize:dynamicStyle$('20px',_window768$(prop.winWidth_$),'16px', _window427$(prop.winWidth_$),'15px')
    }
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
    var CLICKED_=(e)=>{
        var id_ = e.currentTarget.id
        window.location.assign(`${window.location}/${id_}`)
    }
    var MOUSEENTER_=(e)=>{
        // console.log(e.currentTarget + '::enter')
    }
    var MOUSELEAVE_=(e)=>{
        // console.log(e.currentTarget + '::leave')
    }
    return(
        <div style={outDiv_s} id={prop.id_} className={'XS_outDiv'} onClick={e=>CLICKED_(e)} onMouseEnter={e=>MOUSEENTER_(e)} onMouseLeave={e=>MOUSELEAVE_(e)}>

            <div style={img_s}></div>
            <div style={inDiv_s}>
                <p style={p_1} className={'gray _500'}>outcoming</p>
                <p style={p_2} className={'XS_title black _600 '}>{txt}</p>
            </div>
        </div>
    )
}

var Article_x = (prop) => {


    var outDiv_s = {
        display:'flex',flexDirection:'column',alignItems:'flex-start',
        width:dynamicStyle$('25vw',_window768$(prop.winWidth_$),dynamicStyle$('45%',prop.lastChild_,'90%'),_window427$(prop.winWidth_$),dynamicStyle$('44%',prop.lastChild_,'90%')), margin:'8px',
        cursor:'pointer',
    }
    var img_s = {
        background:`url(${require('../imges/img_.jpg')})`, backgroundBlendMode:'saturation', backgroundPosition:'center', backgroundSize:'cover',
        width:'100%',height:dynamicStyle$('200px',_window768$(prop.winWidth_$),'160px',_window427$(prop.winWidth_$),'140px'),
        borderRadius:'8px',

    }
    var p_1 = {
        color:dynamicStyle$('#8d99ae',prop.darkMode_$,'#8d99ae'),
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        fontSize:dynamicStyle$('20px', _window768$(prop.winWidth$), '18px', _window427$(prop.winWidth_$),'16px')
    }
    var p_2 = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        fontSize:dynamicStyle$('28px', _window768$(prop.winWidth$), '22px', _window427$(prop.winWidth_$),'20px'),color:dynamicStyle$('#010c1d',prop.darkMode_$,'#f1dac4')
    }
    var p_3 = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        color:dynamicStyle$('#161b33',prop.darkMode_$,'#d90429'),
    }
    var span_s = {
        padding:dynamicStyle$('4px', _window768$(prop.winWidth_$),'2px', _window427$(prop.winWidth_$),'2px'),
        color:dynamicStyle$('#5cd85e',prop.darkMode_$,'#ff3')
    }
    
    let txt = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'
    var CLICKED_=(e)=>{
        var id_ = e.currentTarget.id
        window.location.assign(`${window.location}/${id_}`)
    }
    var MOUSEENTER_=(e)=>{
        // console.log(e.currentTarget + '::enter')
    }
    var MOUSELEAVE_=(e)=>{
        // console.log(e.currentTarget + '::leave')
    }
    return(
        <div style={outDiv_s} id={prop.id_} className={'AX_outDiv'} onClick={e=>CLICKED_(e)} onMouseEnter={e=>MOUSEENTER_(e)} onMouseLeave={e=>MOUSELEAVE_(e)}>
            <div style={img_s}></div>
            <p style={p_1} className={' _500'}> outcoming date</p>
            <p style={p_2} className={'AX_title _600 '}> Title of article</p>
            <p style={p_3} className={'AX_text'}> {txt} </p>
            <span style={span_s} className={'AX_more _20 _500'}>READ MORE</span>
        </div>
    )
}