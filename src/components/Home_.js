import React from 'react'
import { Link } from 'react-router-dom'
// STYLE
import './style.css'
// IMGS // ICONS
import character_ from '../imges/character_.svg';
import { useState, useEffect } from "react";
import {BsBug, BsFillBugFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {FaEuroSign, FaRegMoon,FaCopyright} from 'react-icons/fa'
import { reStyle$, dynamicStyle$, isNull$, _window768$, _window427$, notdo$ } from '../lainy'
import{GrTwitter} from 'react-icons/gr'
import{FiGithub} from 'react-icons/fi'
import{FaBlog} from 'react-icons/fa'


let width_427 = 427
let width_769 = 769
let condition_1 = (value1, value2, state) => {
    return state <= value1 ? true : false
}
let condition_2 = (value1, value2, state) => {
    return state > value1 ? (state > value2 ? false : true) : false
}
export function Navbar (prop){
    let [winWidth_$, setWinWidth_$] = useState(window.innerWidth)
    let setWindowWidth = () => {
      setWinWidth_$(window.innerWidth)
    }
    
    useEffect(()=>{
        window.addEventListener('resize', setWindowWidth)
    },[winWidth_$])
    // state$ to check if btn was clicked , another state to hide btn
    var [clicked_$, setClicked_$] = useState(false)
    var [appearance_$, setAppearance_$] = useState(null)    

    // set State to change to the dark / light mode
    let toggleMode = () =>{
        prop.setDarkMode_$((prev)=>!prev)
        let y = !prop.darkMode_$ ? true : false
        localStorage.setItem('dark', JSON.stringify(y))
    }

    // small screen nav title JSX
    var SStitle = () =>{

        var btn_s = {
            border:'none',
            outline:'none',
            padding:'4px',
            height:'100%',
            margin:' 0px 43px',
            backgroundColor:'transparent',
            color: dynamicStyle$('#fff',prop.darkMode_$,'#eee'),

        }
        return(
            <a href="/" className="a_">
                <button style={btn_s} className={'btn_4'}>
                    FULL BUGS
                </button>
            </a>
        )
    }
    // 


    var SSoptions = ()=>{

        var ul_ = {
            position:'absolute',
            left:'-12px',
            top:'62px',
            display:dynamicStyle$('flex',isNull$(appearance_$),'none'),
            flexDirection:'column',
            textAlign:'center',
            flexWrap:'wrap',
            padding:'0px',
            boxShadow:dynamicStyle$('1px 1px 2px #ddd', prop.darkMode_$,'none'),
        }
        var a_0 = {
            minWidth:'50px',
            textDecoration:'none',
            padding:'12px',
            backgroundColor:'#edf2f4cc',
            color: dynamicStyle$('#000',prop.darkMode_$,'#2b2e42'),
            fontWeight:'500',
            position:'relative',
            transition:'all ease 550ms',
            zIndex:'999'
        }
        return(
            <ul style={ul_} className={`${appearance_$ ? 'sho' : 'hid'}`}>
                <a style={a_0} className='a_0' href="/"> Home </a>
                <a style={a_0} className='a_0' href="/about">  About </a>
                <a style={a_0} className='a_0' href="/contact">  Contact </a>
            </ul>
        )
    }

    var OptionsBtnHandler = () => {
        setClicked_$(prev=>!prev)
        setAppearance_$(prev=> prev===null ? true : !prev)
    } 

    var btn_1 = {
        height:'100%',
        // borderRadius:'100%',
        padding:'2px 10px 0px 10px',
        backgroundColor:'transparent',
        marginRight:'4px',
        border:'none',
        cursor:'pointer',
        transition:'all ease 550ms',
        position:'relative',
        marginLeft:'12px',
        color:dynamicStyle$('#fff',prop.darkMode_$,'#eee'),
    }

    var SSbtn = () =>{

        return(
            <button style={btn_1} className={'btn_1 btn_4'} onClick={OptionsBtnHandler} >
                <BsFillBugFill className={`transition  ${clicked_$ ? 'rotate180' : 'rotate_back'}`} />
                {SSoptions()}
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
        padding:'0px',
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
    var header_s = {
        backgroundColor:dynamicStyle$('#2b2e4255',prop.darkMode_$, '#161b3333'),
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: dynamicStyle$('68px', condition_2(width_427,width_769,prop.winWidth_$),'0px',condition_1(width_427,width_769,prop.winWidth_$),'0px') ,
        width:'99.9%',
        height:'70px',
        position:'relative',
        boxShadow:dynamicStyle$('1px -1px 6px 2px #bac0c133',prop.darkMode_$,'1px -1px 6px 2px rgba(0,0,0,0.3)'),
        zIndex:'4'
    }
    var btns_s = {
        position:'relative',
        height:'100%',
        backgroundColor:'transparent',
        transition:'all ease 350ms',
        padding:dynamicStyle$('6px 18px 2px 18px', condition_2(width_427,width_769,prop.winWidth_$),'6px 6px 2px 8px'),
        border:'none',
        cursor:'pointer',
        color:dynamicStyle$('#fff',prop.darkMode_$,'#eee'),
        display:dynamicStyle$('blog',condition_1(width_427,width_769,prop.winWidth_$),'none'),
    }
    var btn_2 = {
        position:'relative',
        height:'100%',
        backgroundColor:'transparent',
        transition:'all ease 350ms',
        padding:'6px 12px 2px 12px',
        border:'none',
        cursor:'pointer',
        color:dynamicStyle$('#222',prop.darkMode_$,'#eee'),
    }
    return(
        <header style={header_s}>
            {/* className="logo--" */}
            <div style={outDiv_1}>

            <Link to={'/'} className='link_' > 
            <button style={btns_s} className={'btn_4'} >
                <BsFillBugFill/>
            </button> 
            </Link>

            {(prop.winWidth_$ < 428) ?   <SSbtn/>  : <div></div>}
            {prop.winWidth_$ < 428 && SStitle()}

            <Link to={'/'}  className='link_'> 
            <button style={btns_s} className={ 'btn_4' }>
            IXTIX BUGY
            </button> 
            </Link>

            </div>

            <ul style={ul_1} className="options--">
                <Link to={'/'}  className='link_'>
                    <button style={btns_s} className={ 'btn_4' } id={'home_'}>
                    Home
                    </button>
                </Link>
                
                <Link to={'/article'} className={`link_`}>
                    <button style={btns_s} className={'btn_4'} id={'article_'}>
                        Article
                    </button>
                 </Link>
                <Link to={'/about'}  className='link_'>
                    <button style={btns_s} className={'btn_4'} id={'about_'}>
                        About
                    </button>
                </Link>

                <Link to={'/contact'}  className='link_'>
                <button style={btns_s} className={'btn_4'} id={'contact_'}>
                    Contact
                </button>
                </Link>

                <button style={btn_2} className={ 'mode_' } onClick={toggleMode}>
                    {prop.darkMode_$ ? <FiSun/> :<FaRegMoon/>}
                </button>

            </ul>

        </header>
    )
}

// 
// 
export  function Home_C0 ( prop ) {
    var outDiv_1 ={
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        background:dynamicStyle$('transparenet', prop.darkMode_$,'#0d0c1d')
    }
    var in1Div_ = {
        position:'relative',
        width:dynamicStyle$('45vw',condition_2(width_427,width_769,prop.winWidth_$),'100%', condition_1(width_427,width_769,prop.winWidth_$),'100%'),
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:'2vh 0px',
        borderRadius:'24px',
        zIndex:'2'
    }
    var img_s = {
        position:'relative',
        width:dynamicStyle$('100%',condition_2(width_427,width_769,prop.winWidth_$),'100%',condition_1(width_427,width_769,prop.winWidth_$),'100%'),
        margin:'0px',
        height:'auto',
        borderRadius:'100%',
        opacity:'1',
        zIndex:'2'
    }
    var in2Div_ = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        padding:'20px',
        width:dynamicStyle$('45vw',condition_2(width_427,width_769,prop.winWidth_$),'90%',condition_1(width_427,width_769,prop.winWidth_$),'100%'),
        margin:'0px 5px 0px 0px',
        postion:'relative',
    }
    var btn_s = {
        padding:'4px 8px',
        outline:'none',
        backgroundColor: dynamicStyle$('transparenet',prop.darkMode_$,'#4f3499'),
        border:'none',
        margin:'8px 0px',
        cursor:'pointer',
    }
    var p_s = {
        color:dynamicStyle$('#000',prop.darkMode_$,'#f1dac4')
    }
    return(
        <div  style={outDiv_1}className={'outDiv_1'}>

            <div style={in1Div_}>
                <img style={img_s}src={character_} className='img_s'></img>
            </div>

            <div style={in2Div_}>
                <p style={p_s}>
                    Hi there!
                </p>
                <p style={p_s}>
                    my name is Housam, I'm a front-end developer
                </p>

                <Link to={`/about`} className='link_'>
                <button style={btn_s} className='btn_4'>
                    <p style={p_s}>learn more . .</p>                    
                </button>
                </Link>
            </div>


        </div>
    )
}

export function Home_C1 (prop){


    function Feature_box (pro) {
        var outDiv_1 = {
            display:'flex',
            flexDirection:'column',
            borderRadius:'12px',
            border:dynamicStyle$('1px solid #393',prop.darkMode_$,'1px solid #474973'),
            padding:'20px',
            margin:'10px 10px',
            boxShadow:dynamicStyle$('2px 1px 3px #393',prop.darkMode_$,'2px 1px 3px #474973'),
            width:'140px',
            height:'150px',
            background:'transparenet'
        }
        var p_s = {
            textAlign:'center',
            color:'#ff3',
            fontSize:'24px',
            textShadow:'2px 2px 4px #000, 2px -2px 0px #000'
        }
        var p1_s = {
            // color:dynamicStyle$('#222',prop.darkMode_$,'#f1dac4'),
            textAlign:'center',
            height:'100%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            color:dynamicStyle$('#222',prop.darkMode_$,'#f1dac4')
        }
        return(
            // className='feature_box--'
            <div style={outDiv_1}>
                {/* className={'feature_box_title'} */}
                <p style={p_s}>
                {pro.title}
                </p>
                {/* className={'feature_box_description'} */}
                <p style={p1_s}>
                {pro.description}
                </p>
            </div>
        )
    }

    var outDiv_1 = {
        display:'flex',
        // 
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        boxShadow:dynamicStyle$('2px 2px 10px -1px rgba(100,100,100,0.8)',prop.darkMode_$,'2px 2px 6px -2px rgba(20,20,20,0.6)'),
        padding:'20px 0px',
        background:dynamicStyle$('transparenet',prop.darkMode_$,'#161b33')

    }
    var p1_s = {
        textDecoration:'underline',
        color: dynamicStyle$('#222',prop.darkMode_$,'#f1dac4'),
        padding:'0px 20px',
        textAlign:'center'
    }
    var outDiv_2 = {
        // width:'60vw',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center'
    }
    return(
        // className={'features_'}
        <div style={outDiv_1} >
            {/* className={'features_info'} */}
            <p style={p1_s}>
                What is it what I'm good at?
            </p>
            {/* className='features--boxes' */}
            <div style={outDiv_2}>
            <Feature_box
            title = {`HTML`}
            description = {`structure a web page`}
            />
            <Feature_box
            title = {`CSS`}
            description = {`style it`}
            />
            <Feature_box
            title = {`JS`}
            description = {`implement dynamic features`}
            />
            <Feature_box
            title = {`React`}
            description = {`let it be flexible`}
            />
            </div>


        </div>
    )
}


export function Home_C2 (prop){

    function Article_box (pro){

        var x = 0 ; 
        var img_source = x>0 ? pro.img_source : require('../imges/nodejs_wp.jpg')

        var outDiv_1 = {
            margin:'8px 10px',
            maxWidth:dynamicStyle$('282px',condition_2(width_427,width_769,prop.winWidth_$),'220px'),
            border:dynamicStyle$('1px solid #272',prop.darkMode_$,'1px solid #474973'),
            borderRadius:'8px',
            padding:'0px 0px 8px 0px',
            boxShadow: dynamicStyle$('5px 5px 7px -1px #333',prop.darkMode_$,'3px 3px 5px -1px #000'),
            transition:'all ease-in-out 350ms',
            background: dynamicStyle$('transparenet',prop.darkMode_$,'#474973')
        }
        var inDiv_1 = {
            maxWidth:'100%'
        }
        var img_s = {
            height:'auto',
            maxWidth:'100%',
            borderRadius:'5px',
            boxShadow:'1px 1px 2px #000'
        }
        var inDiv_2 = {
            paddingLeft:'8px'
        }
        var p1_s = {
            fontWeight:'700',
            margin:'0px',
            textDecoration:'underline #993',
            padding:'0px 4px',
            color:dynamicStyle$('#00f',prop.darkMode_$,'#f1dac4')
        }
        var p2_s = {
            fontWeight:'300',
            color:'#393',
            padding:'0px 4px'
        }
        var p3_s = {
            fontWeight:'300',
            color:'#aaa',
            padding:'2px 4px',
            border:'1px solid #aaa',
            borderRadius:'4px',
            maxWidth:'auto',
            display:'inline-block',
            cursor:'help',
            margin:'0px'
        }
        return(
            // className={'article_box'}
            <div style={outDiv_1} id={'c2_0'}>
                {/* className='article_box--img--' */}
                <div style={inDiv_1}>
                {/* className='img--img' */}
                    <img src={img_source} style={img_s} ></img>
                </div>
                {/* className='article_box--infos--' */}
                <div style={inDiv_2}>
                {/* className={'infos_title'} */}
                    <p style={p1_s} >
                    {x>0 ? pro.title_ : 'TITLE'}
                    </p>
                    {/* className={'infos_description'} */}
                    <p style={p2_s}>
                    {x>0 ? pro.description_ : 'DESCRIPTION'}
                    </p>
                    {/* className={'infos_tag'} */}
                    <p style={p3_s} >
                    {x>0 ? pro.tag_ : 'TAG'}
                    </p>
                </div>
            </div>
        )
    }

    let pseudoArray = [0 , 1 , 2 , 3 ]

    let BoxCreator = () => {
        return pseudoArray.map(i=>{
            return <Link className='link_' to={`/article/${i}`} key={i}> <Article_box/> </Link>
        })
    }
    var outDiv_s = {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        // alignItems:'center',
        padding:dynamicStyle$('30px 80px',condition_2(width_427,width_769,prop.winWidth_$),'10px',condition_1(width_427,width_769,prop.winWidth_$),'4px'),
        background: dynamicStyle$('transparent',prop.darkMode_$,'#0d0c1d')
    }
    var inDiv_2 = {
        display:'flex',
        alignItems:'center',
        justifyContent:dynamicStyle$('center',condition_2(width_427,width_769,prop.winWidth_$),'center'),
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'0px 0px'
    }
    var inDiv_1 = {
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'0px 0px'
    }
    var h_s = {
        textTransform:'uppercase',
        textDecoration:'underline',
        letterSpacing:'2px',
        margin:'8px 2em',
        color: dynamicStyle$('#222',prop.darkMode_$,'#f1dac4')
    }
    return(
        // className={'articles_'}
        <div style={outDiv_s}>
        
        <div style={inDiv_1}>
        <h2 style={h_s}>LATEST ARTICLES</h2>
        </div>

        <div style={inDiv_2}>
            {BoxCreator()}
        </div>

        </div>
    )
}


export function Footer (prop){

    var outDiv_s = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:'50px',
        background:dynamicStyle$('#fe4',prop.darkMode_$,'#a69cac')
    }
    var inDiv_1 = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        position:'relative',
        padding:dynamicStyle$('0px 0px 0px 2em',_window768$(),'0px 0px 0px 1em', _window427$(),'4px')
    }
    var p_s = {
        textTransform:'uppercase',
        letterSpacing:'2px',
        padding:'0px 4px'
    }
    
    var ul_s = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        // minHeight:'50px',
        listStyle:'none',
        position:'relative',
        padding:'0px 2em 0px 0em'
    }
    var li_s = {
        padding:'8px 8px 2px 8px',
        background:'#000',
        borderRadius:'50%',
        margin:dynamicStyle$('0px 12px 0px 12px',_window768$(),'0px 8px 0px 8px',_window427$(),'0px 4px'),
        cursor:'pointer',
    }

    return(

        <div style={outDiv_s}>

            <div style={inDiv_1}>

            <BsBug/>
            <p style={p_s}>
                ixtix 
            </p>
            <FaCopyright/>
            <p style={p_s}>
                2022
            </p>

            </div>

            <ul style={ul_s}>
                <a href={'https://twitter.com/bugy_ixtix'} target="blank">
                    {/*   className={`icon_I ${'contact_icon_'}`} */}
                    <li style={li_s} id={'i_1'}>
                        <GrTwitter/>
                    </li>
                </a>
                <a href={'https://github.com/bugixtix'} target='blank'>
                    {/* className='contact_icon_ icon_II' */}
                    <li style={li_s} id={'i_2'}>
                        <FiGithub/>
                    </li>
                </a>

                <a href={'#'} target='blank'>
                    {/* className='contact_icon_ icon_III' */}
                <li style={li_s} id={'i_3'}>
                    <FaBlog/>
                </li>
                </a>

            </ul>

        </div>

    )
}
export function Home_Interface (prop){
    var Home_Interface = {
        background: dynamicStyle$('transparent', prop.darkMode_$,'#161b33'),
        width:"100%",
        overflowX:'hidden'
    }

    return(

        <div style={Home_Interface}>

        <Navbar  darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$} setWinWidth_$={prop.setWinWidth_$} />
        <Home_C0 darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />
        <Home_C1 darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />
        <Home_C2 darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />
        {/* <Contact darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} /> */}
        <Footer  darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />

        </div>
    )
}