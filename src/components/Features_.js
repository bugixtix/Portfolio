import React from 'react'
// style
import './style.css'
import './darked.css'
// COMPONENETS
export  function Features (prop){


    function Feature_box ( prop ) {

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

    return(
        <div className={'features_'}>
            <p className={'features_info'}>
                What is it what we're good at?
            </p>
            <div className='features--boxes'>
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
