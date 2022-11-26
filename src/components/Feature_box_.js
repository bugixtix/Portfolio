import React from 'react'
// style
import './style.css'

export default function Feature_box ( prop ) {

    return(
        <div className='feature_box--'>
            <p className={'feature_box_title'}>
            {prop.title}
            </p>
            <p className={'feature_box_description'}>
            {prop.description}
            </p>
        </div>
    )
}