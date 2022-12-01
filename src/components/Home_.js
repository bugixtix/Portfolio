import React from 'react'
import { Link } from 'react-router-dom'
// STYLE
import './style.css'
// IMGS // ICONS
import character_ from '../imges/character_.svg';
import { useState, useEffect } from "react";
import{GrTwitter} from 'react-icons/gr'
import{FiGithub} from 'react-icons/fi'
import{FaBlog} from 'react-icons/fa'
import {BsBug, BsFillBugFill} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import {FaEuroSign, FaRegMoon,FaCopyright} from 'react-icons/fa'
import { reStyle$, dynamicStyle$, isNull$ } from '../lainy'

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
            backgroundColor:dynamicStyle$('#eee',prop.darkMode_$,'#474973'),
            color: dynamicStyle$('#000',prop.darkMode_$,'#eee'),

        }
        return(
            <a href="/" className="a_">
                <button style={btn_s}>
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
            top:'70px',
            display:dynamicStyle$('flex',isNull$(appearance_$),'none'),
            flexDirection:'column',
            textAlign:'center',
            flexWrap:'wrap',
            padding:'0px',
            boxShadow:'2px 2px 2px #ddd',
        }
        var a_0 = {
            minWidth:'50px',
            textDecoration:'none',
            padding:'12px',
            backgroundColor:'rgba(300,300,300,0.65)',
            color: dynamicStyle$('#000',prop.darkMode_$,'#eee'),
            fontWeight:'500',
            position:'relative',
            transition:'all ease 550ms',
        }
        return(
            <ul style={ul_} className={`${appearance_$ ? 'sho' : 'hid'}`}>
                <a style={a_0} className='a_0' href="/#"> Home </a>
                <a style={a_0} className='a_0' href="#">  About </a>
                <a style={a_0} className='a_0' href="/">  Contact </a>
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
        backgroundColor:dynamicStyle$('#eee',prop.darkMode_$,'#474973'),
        marginRight:'4px',
        border:'none',
        cursor:'pointer',
        transition:'all ease 550ms',
        position:'relative',
        marginLeft:'12px',
        color:dynamicStyle$('#222',prop.darkMode_$,'#eee'),

        
    }

    var SSbtn = () =>{

        return(
            <button style={btn_1} className={'btn_1'} onClick={OptionsBtnHandler} >
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
        backgroundColor:dynamicStyle$('rgba(100,100,300,0.05)',prop.darkMode_$, '#161b33'),
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingLeft: dynamicStyle$('68px', condition_2(width_427,width_769,prop.winWidth_$),'0px',condition_1(width_427,width_769,prop.winWidth_$),'0px') ,
        width:'100%',
        height:'70px',
        position:'relative',
        boxShadow:dynamicStyle$('2px -2px 10px 2px rgba(100,100,100,0.6)',prop.darkMode_$,'2px -2px 6px 2px rgba(20,20,20,0.6)'),
        zIndex:'4'
    }
    var btns_s = {
        position:'relative',
        height:'100%',
        backgroundColor:dynamicStyle$('#eee',prop.darkMode_$,'#474973'),
        transition:'all ease 350ms',
        padding:dynamicStyle$('6px 18px 2px 18px', condition_2(width_427,width_769,prop.winWidth_$),'6px 6px 2px 8px'),
        border:'none',
        cursor:'pointer',
        color:dynamicStyle$('#222',prop.darkMode_$,'#eee'),
        display:dynamicStyle$('blog',condition_1(width_427,width_769,prop.winWidth_$),'none'),
    }
    var btn_2 = {
        position:'relative',
        height:'100%',
        backgroundColor:dynamicStyle$('#eee',prop.darkMode_$,'#474973'),
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
                    <button style={btns_s} className={ 'btn_4' }>
                    Home
                    </button>
                </Link>
                
                <Link to={'/article'} className={`link_`}>
                    <button style={btns_s} className={'btn_4'}>
                        Article
                    </button>
                 </Link>
                <Link to={'/about'}  className='link_'>
                    <button style={btns_s} className={'btn_4'}>
                        About
                    </button>
                </Link>

                <Link to={'/contact'}  className='link_'>
                <button style={btns_s} className={'btn_4'}>
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
        padding:dynamicStyle$('10px 80px',condition_2(width_427,width_769,prop.winWidth_$),'10px',condition_1(width_427,width_769,prop.winWidth_$),'4px'),
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
        margin:'8px 20px',
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

export function Contact ( prop ){


    let [infos_$, setInfos_$] = useState({name:'', email:'', title:'', comment:''})

    var handleChange = (event) => {
        const {name, value, type} = event.target
        setInfos_$((prev)=>({
            ...prev, [name] : value
        }))
    }

    var handleSubmit = (event) => {
        event.preventDefault()
        console.log(infos_$)
    }

    var outDiv_1 = {
        width:'100%',
        position:'relative',
        background:`${dynamicStyle$('linear-gradient(#999,#000)',prop.darkMode_$,'linear-gradient(#666,#777)')}, url(${require('../imges/contact_I_bg.jpg')})`,
        backgroundPosition:'left',
        backgroundBlendMode:dynamicStyle$('saturation',prop.darkMode_$,'darken'),
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:dynamicStyle$('unset',condition_2(width_427,width_769,prop.winWidth_$),'center',condition_1(width_427,width_769,prop.winWidth_$),'center'),
        zIndex:'5',
        margin:'2em 0px ',
        boxShadow:dynamicStyle$('2px 2px 10px 4px rgba(100,100,100,0.8)',prop.darkMode_$,'2px 2px 6px 4px rgba(20,20,20,0.6)'),

    }
    var inDiv_1 = {
    }
    var fieldset_s = {
        padding:'20px',
        postion:'relative',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        zIndex:'2',
        margin:dynamicStyle$('2em 2em 0em 100px',condition_2(width_427,width_769,prop.winWidth_$),'4px',condition_1(width_427,width_769,prop.winWidth_$),'2px'),
        border:'none',
        boxShadow:'5px 5px 7px -1px #333',
    }
    var legend_s = {
        fontWeight:'600',
        textShadow:'1px 2px #7ee',
        padding:'4px 0px',
        margin:'4px 6px',
        borderRadius:'24px',
        zIndex:'2',
        
    }
    var inDiv_2 = {
        display:'flex',
        flexWrap:'wrap',
    }
    var input_1 = {
        maxWidth:dynamicStyle$('174px',condition_2(width_427,width_769,prop.winWidth_$),'92px',condition_1(width_427,width_769,prop.winWidth_$),'100px'),
        padding:'4px 12px',
        backgroundColor:'rgba(10,10,10,0.5)',
        // border:'none',
        margin:'4px',
        color:'#fff',
        borderRadius:'20px',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_2 = {
        width:dynamicStyle$('274px',condition_2(width_427,width_769,prop.winWidth_$),'199px',condition_1(width_427,width_769,prop.winWidth_$),'174px'),
        padding:'4px 12px',
        backgroundColor:'rgba(10,10,10,0.5)',
        // border:'3px solid #ded',
        margin:'4px',
        color:'#fff',
        borderRadius:'20px',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_3 = {
        padding:'4px 12px',
        backgroundColor:'rgba(10,10,10,0.5)',
        // border:'2px solid #ded',
        margin:'4px',
        color:'#fff',
        borderRadius:'20px',
        width:dynamicStyle$('456px',condition_2(width_427,width_769,prop.winWidth_$),'300px',condition_1(width_427,width_769,prop.winWidth_$),'274px'),
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var input_4 = {
        padding:'8px 12px',
        margin:'4px',
        height:'100px',
        borderRadius:'20px',
        backgroundColor:'rgba(10,10,10,0.5)',
        resize:'none',
        color:'#fff',
        width:dynamicStyle$('456px',condition_2(width_427,width_769,prop.winWidth_$),'300px',condition_1(width_427,width_769,prop.winWidth_$),'274px'),
        borderWidth:'2px',
        borderStyle:'inset',
        textTransform:'uppercase',
        letterSpacing:'1px'
    }
    var btn_1 = {
        width:dynamicStyle$('456px',condition_2(width_427,width_769,prop.winWidth_$),'300px',condition_1(width_427,width_769,prop.winWidth_$),'274px'),
        background: 'linear-gradient(217deg, rgba(0,0,0,.8),rgba(2,0,0,0) 70.71%), linear-gradient(127deg,rgba(0,255,0,.8),rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
        border:'none',
        borderRadius:'12px',
        padding:'8px',
        margin:'4px 0px',
        cursor:'pointer',
        color:'#dee',
        transition:'all ease 250ms',
        textTransform:'uppercase',
        letterSpacing:'2px'

    }

    var ul_s = {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        minHeight:'50px',
        listStyle:'none',
        position:'relative',
    }
    var li_s = {
        padding:'8px 8px 2px 8px',
        background:'#000',
        borderRadius:'50%',
        margin:'8px 12px 12px 12px',
        cursor:'pointer',
    }
    return(
        // className={'contact--'}
        <div style={outDiv_1}>
            <br></br>
            {/*  className='contact--extra--' */}
            {/* <div style={outDiv_2}>

            </div> */}
            {/* className={'form_icons'} */}
            <div style={inDiv_1}>
                {/* className='contact--form' */}
            <form onSubmit={handleSubmit}>
                {/*  className='contact--form' */}
                <fieldset style={fieldset_s}>
                {/* className='feedback_' */}
                <legend style={legend_s}>Feedback</legend>
                {/* className='name_email_--' */}
                <div style={inDiv_2}>
                    {/* id={'name_'} ; id={'email_'}*/ }
                <input style={input_1} type='text' name='name' placeholder='Name' required value={infos_$.name} onChange={handleChange} />
                <input style={input_2} type='email' name='email' placeholder='email' required value={infos_$.email} onChange={handleChange} />
                </div>
                {/*  id={'title_'};id={'comment_'};id={'submit_'}; */}
                <input style={input_3} type='text' placeholder='title' name='title' value={infos_$.title} onChange={handleChange} />
                <textarea style={input_4} type='comment'  className='comment_' placeholder='Comment' name='comment' value={infos_$.comment} onChange={handleChange} required/>
                <button style={btn_1} type='submit'>send</button>
                </fieldset>
            </form>

            {/* className='contact_icons--' */}
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

        </div>
    )
}

export function Footer (prop){

    var outDiv_s = {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height:'50px',
        background:dynamicStyle$('#fe4',prop.darkMode_$,'#a69cac')
    }
    var inDiv_1 = {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        position:'relative',
        left:'100px',
    }
    var p_s = {
        textTransform:'uppercase',
        letterSpacing:'2px',
        padding:'0px 4px'
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
        <Contact darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />
        <Footer  darkMode_$={prop.darkMode_$} winWidth_$={prop.winWidth_$} />

        </div>
    )
}