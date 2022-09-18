import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// Style
import './style.css'
import './media-style.css'
import './darked.css'

// icons
import{GrTwitter} from 'react-icons/gr'
import{FiGithub} from 'react-icons/fi'
import{FaBlog} from 'react-icons/fa'

export default function Contact ( prop ){

    var toggleStyle = (x) => {
        return prop.state.darkMode_$ ? (x=='contact_'?'contact_da--':x=='form_icons' ? 'form_da_icons--' : x=='email_' ? 'email_da_' : x=='name_' ? 'name_da_' : x=='title_' ? 'title_da_' : x=='comment_' ? 'comment_da_' : x=='submit_' ? 'submit_da_' : x=='contact_icon_' ? 'contact_da_icon_' : x=='icon_II' ? 'icon_da_II' :'UNDEFINED') : (x=='contact_'?'contact--':x=='form_icons' ? 'form_icons--' : x=='email_' ? 'email_' : x=='name_' ? 'name_' : x=='title_' ? 'title_' : x=='comment_' ? 'comment_' : x=='submit_' ? 'submit_' : x=='contact_icon_' ? 'contact_icon_' : x=='icon_II' ? 'icon_II' :'UNDEFINED')
    }

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


    return(
        <div  className={toggleStyle('contact_')}>
            <br></br>
            <div className='contact--extra--'>

            </div>
            <div className={toggleStyle('form_icons')}>
            <form className='contact--form' onSubmit={handleSubmit}>
                <fieldset className='contact--form'>
                <legend className='feedback_'>Feedback</legend>
                <div className='name_email_--'>

                <input type='text' name='name' id={toggleStyle('name_')} placeholder='Name' required value={infos_$.name} onChange={handleChange} />
                <input type='email' id={toggleStyle('email_')} placeholder='email' name='email' value={infos_$.email} onChange={handleChange} />
                </div>
                <input type='text' id={toggleStyle('title_')} placeholder='Comment-title' name='title' value={infos_$.title} onChange={handleChange} />
                <textarea type='comment' id={toggleStyle('comment_')} className='comment_' placeholder='Comment' name='comment' value={infos_$.comment} onChange={handleChange} required/>
                <button type='submit' id={toggleStyle('submit_')}>send</button>
                </fieldset>
            </form>

            <ul className='contact_icons--'>
                <a href={'https://twitter.com/bugy_ixtix'} target="blank">
                    <li  className={`icon_I ${toggleStyle('contact_icon_')}`}>
                        <GrTwitter/>
                    </li>
                </a>
                <a href={'https://github.com/bugixtix'} target='blank'>
                    <li className='contact_icon_ icon_II'>
                        <FiGithub/>
                    </li>
                </a>

                <a href={'#'} target='blank'>
                <li className='contact_icon_ icon_III'>
                    <FaBlog/>
                </li>
                </a>

            </ul>
            </div>

        </div>
    )
}