import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
// 
import './Blog_style.css'
import nodejs_wp from '../imges/nodejs_wp.jpg'
import {Navbar} from '../components/Home_'
import App from '../App'
 export default function Blog_Site () {


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
    return(
        
        <div className='Blog_Site'>

            <div className='blog_body--'>

                <div className='body_content--'>
                {/* Title */}
                    <h1 className='body_title'>
                        Here comes the title
                        <span className='mini'> mini title</span>
                    </h1>
                    {/* article_info */}
                <Article_info/>
                {/* Title img */}
                <img className='body_image' src={nodejs_wp}></img>

                    {/* Blog TEXT */}
                    <p className='body_text'>
                        Here comes some text
                        <span className='href' href='#'>href</span>
                        yeah and that was it!
                    </p>
                {/* an IMG */}
                    <div className='flex_center'><img src={nodejs_wp} className={`text_img`}></img></div>
                </div>


                {/* SIDE */}
                <div className='_flex_column'>
                    <Side/>
                    <Side/>
                    <Side/>
                    <Side/>
                </div>
                
            </div>

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