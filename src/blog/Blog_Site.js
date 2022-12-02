import React from 'react'

import '../components/style.css'
import nodejs_wp from '../imges/nodejs_wp.jpg'
import {Home_C2} from '../components/Home_'
 
export default function Blog_Site (prop) {


    var Article_info = () =>{
        return(
            <span className='article_info'>
            <span className='padding_I tag_'>tag</span>
            <span className='padding_I date_'>date</span>
            <span className='padding_I writer_'>writer</span>
            <span className='padding_I readTime_'>time to read</span>
        </span>
        )
    }

    var outDiv_1 = {
        maxWidth:'100vw',
        height:'80vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        position:'relative',
        // overflow:'hidden'
    }
    var img_s = {
        width:'100%',
        minHeight:'80%',
        objectFit:'cover',
        position:'relative',
        boxShadow:'2px 2px 3px 3px #444'

    }
    var h2_s = {
        padding:'20px 8rem',
        background:'rgba(200,200,200,0.5)',
        // boxShadow:'2px 2px 3px 3px #999'
        position:'relative',


    }
    var h3_s = {
        padding:'12px 8rem',
        background:'rgba(200,200,200,0.8)',
        width:'99.4%',
        position:'relative',
        boxShadow:'2px 2px 3px 3px #999',
    }
    var outDiv_2 = {
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        background:'rgba(200,200,200,0.5)',
        padding:'0px 0px 3rem 0px',
        boxShadow:'2px 2px 4px 4px #999',
        margin:'0px 0px 1rem 0px'
    }
    var p_s = {
        padding:'8px 4rem 16px 8rem',
        letterSpacing:'1px',
        width:'100%',
        background:'#eee',
        lineHeight:'1.8em'
    }
    var p_1 = {
        padding:'8px',
        letterSpacing:'1.8px',
        width:'100%',
        background:'#fff',
        textAlign:'center',
    }
    var in1Div_ = {
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        width:'70vw',

    }
    var in2Div_ = {
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        width:'18vw',
        position:'-webkit-sticky',
        position:'sticky',
        top:'0px',
        
    }
    var img_1 = {
        width:'100%',
    }
    var in2Div_2 = {
        border:'20px solid rgba(200,200,200,0.9)',
        margin:'0px 0px 20px 0px',
        boxShadow:'-2px 2px 3px 3px #888, -2px 2px 3px 3px #888',
        position:'relative',

    }
    var in1Div_1 = {
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexWrap:'wrap',
        flexDirection:'column',
        // padding:'0px 0px 0px 8rem'
    }
    var img_2 = {
        width:'80%',
        padding:'0px 0px 0px 4rem'
    }
    var img_p = {
        padding:'4px',
        background:'rgba(200,200,200,0.7)',
        width:'100%',
        padding:'4px 0px 4px 4rem',
        textAlign:'center',
        color:'#666'
    }
    var h4_s = {
        padding:'10px 8rem',
        background:'rgba(200,200,200,0.7)',
        boxShadow:'2px 2px 3px 3px #999',
        position:'relative',
        width:'99.4%',

    }

    // 
    function InfoBox (pro){

        return (
        <div style={in2Div_2}>
            <img style={img_1} src={pro.imgSource ? pro.imgSource : nodejs_wp}></img>
            <p style={p_1}>{pro.title ? pro.title : 'did you know that? i guess not ...'}</p>
        </div>
        )
    }
    // 
    return(
        
    <div className='Blog_Site'>

        <div style={outDiv_1}>
            <img style={img_s} src={nodejs_wp}></img>
            <h2 style={h2_s}>some things</h2>
        </div>

        <div style={outDiv_2}>

            <div style={in1Div_}>
            <h3 style={h3_s}>some thing else</h3>
            <p style={p_s}>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <h3 style={h3_s}>WHERE COULD I GET SOME?</h3>
            <p style={p_s}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <span style={in1Div_1}><img style={img_2} src={nodejs_wp}></img><p style={img_p}>a picture</p></span>
            <p style={p_s}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <h4 style={h4_s}>WHERE IS IT COME FROM?</h4>
            <p style={p_s}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <h4 style={h4_s}>CONCLUSION</h4>
            <p style={p_s}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
            
            <div style={in2Div_}>
                <InfoBox />
                <InfoBox />
            </div>
        </div>
        <Home_C2 darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
    </div>
)
}

function Side () {

    return(
    <div className='blog_side'>
        <img className='side_image' src={nodejs_wp}></img>
        <div className='side_titel'>side Title / did you know</div>
        <div className='side_text'>side Text / learning react makes it easier to compile the fron- and end-side</div>
    </div>  
    )
}