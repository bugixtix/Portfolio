import React from 'react'
import { Link } from 'react-router-dom'
// style
import './style.css'
import './darked.css'
// imges
import character_ from '../imges/character_.svg'

export default function Home ( prop ) {

    var toggleStyle = (x) => {
        return prop.state.darkMode_$ ? (x=='home_' ? 'home_d--'  : x=='infos_btn' ? 'infos_da--btn' : x=='infos_head' ? 'infos_da--head' : x=='infos_body' ? 'infos_da--body' : x=='infos_body_p' ? 'infos_da--body-p' : 'UNDEFEINED ITEM') : (x=='home_' ? 'home--'  : x=='infos_btn' ? 'infos--btn' : x=='infos_head' ? 'infos--head' : x=='infos_body' ? 'infos--body' : x=='infos_body_p' ? 'infos--body-p' : 'UNDEFEINED ITEM')
    }

    return(
        <div className={toggleStyle('home_')}>

            <div className='image--'>
                <img src={character_} className='image--img'></img>
            </div>

            <div className='infos--'>
                <p className={ toggleStyle('infos_head')}>
                    wer ist da, was ist da los
                </p>
                <p className={ toggleStyle('infos_body')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit laborum.
                </p>
                <p className={ toggleStyle('infos_body_p')}>
                here comes some text . . .
                </p>

                <Link to={`/about`} className='link_'>
                <button className={toggleStyle('infos_btn')}>
                    <p className='btn-p'>learn more . .</p>                    
                </button>
                </Link>
            </div>


        </div>
    )
}