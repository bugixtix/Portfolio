import React from 'react'
import { Link } from 'react-router-dom'
// style
import './style.css'
import './darked.css'
// imges
import character_ from '../imges/character_.svg'

export default function Home ( prop ) {

    var in1Div_ = {
        minWidth:'35vw',
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:'2vh 0px',
        borderRadius:'24px',
        zIndex:'2'
    }
    var img_s = {
        width:'90%',
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
        width:'45vw',
        margin:'0px 5px 0px 0px',
        postion:'relative',
    }
    return(
        <div className={'outDiv_1'}>

            <div style={in1Div_} className='image--'>
                <img style={img_s}src={character_} className='img_s'></img>
            </div>

            <div style={in2Div_}>
                <p>
                    Ready to get your website?
                </p>
                <p >
                    IXTIX IS A GROUP OF SKILLED FRONTEND-PROGRAMMERS WITH A BIT OF EXPERIENCE AND LOT OF CONFIDENCE
                </p>
                <p >
                    we code while sleeping though!
                </p>

                <Link to={`/about`} className='link_' style={{width:'100%'}}>
                <button>
                    <p>learn more . .</p>                    
                </button>
                </Link>
            </div>


        </div>
    )
}