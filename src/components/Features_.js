import React from 'react'
// style
import './style.css'
import './darked.css'
// COMPONENETS
import Feature_box from './Feature_box_'
export default function Features (prop){

    var toggleStyle = (x) => {
        return prop.state.darkMode_$ ? (x=='features_' ? 'features_da--':x=='features_info' ? 'features_da--info' : x=='feature_box_title' ? 'feature_box_da--title' : x=='feature_box_description' ? 'feature_box_da--description' :'UNDEFINED') : (x=='features_' ? 'features--' : x=='features_info' ? 'features--info' : x=='feature_box_title' ? 'feature_box--title' : x=='feature_box_description' ? 'feature_box--description' : 'UNDEFINED')
    }
    return(
        <div className={toggleStyle('features_')}>
            <p className={toggleStyle('features_info')}>
                What is it what we're good at?
            </p>
            <div className='features--boxes'>
            <Feature_box
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            handler = {{handleStyle : toggleStyle}}
            />
            </div>


        </div>
    )
}