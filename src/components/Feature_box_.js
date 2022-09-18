import React from 'react'
// style
import './style.css'

export default function Feature_box ( prop ) {
    var x = 1;


    return(
        <div className='feature_box--'>
            <p className={prop.handler.handleStyle('feature_box_title')}>
            {x>0 ? prop.title : 'TITLE'}
            </p>
            <p className={prop.handler.handleStyle('feature_box_description')}>
            {x>0 ? prop.description : 'DESCRIPTION'}
            </p>
        </div>
    )
}