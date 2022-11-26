import React from 'react'
// Style
import './style.css'
import './darked.css'
// COMPONENETS
import Article_box from './Article_box_'
import { Link } from 'react-router-dom'

export function Articles (prop){

    function Article_box (prop){

        var x = 0 ; 
        var img_source = x>0 ? prop.img_source : require('../imges/nodejs_wp.jpg')
        return(
            <div className={'article_box'}>
                <div className='article_box--img--'>
                    <img src={img_source} className='img--img'></img>
                </div>
                <div className='article_box--infos--'>
                    <p  className={'infos_title'}>
                    {x>0 ? prop.title_ : 'TITLE'}
                    </p>
                    <p className={'infos_description'}>
                    {x>0 ? prop.description_ : 'DESCRIPTION'}
                    </p>
                    <p className={'infos_tag'}>
                    {x>0 ? prop.tag_ : 'TAG'}
                    </p>
                </div>
            </div>
        )
    }

    let pseudoArray = [0 , 1 , 2 , 3 , 4]

    let BoxCreator = () => {
        return pseudoArray.map(i=>{
            return <Link className='link_' to={`/article/${i}`} key={i}> <Article_box/> </Link>
        })
    }
    return(
        <div className={'articles_'}>
            {BoxCreator()}
        </div>
    )
}