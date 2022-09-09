import React from 'react'

export default function Article_box (prop){

    var x = 0; 
    var img_source = x>0 ? prop.img_source : require('../imges/nodejs_wp.jpg')
    return(
        <div className={prop.handler.handleStyle('article_box')}>
            <div className='article_box--img--'>
                <img src={img_source} className='img--img'></img>
            </div>
            <div className='article_box--infos--'>
                <p  className={prop.handler.handleStyle('infos_title')}>
                {x>0 ? prop.title_ : 'TITLE'}
                </p>
                <p className={prop.handler.handleStyle('infos_description')}>
                {x>0 ? prop.description_ : 'DESCRIPTION'}
                </p>
                <p className={prop.handler.handleStyle('infos_tag')}>
                {x>0 ? prop.tag_ : 'TAG'}
                </p>
            </div>
        </div>
    )
}