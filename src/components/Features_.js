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
            title = {`HTML`}
            description = {`structure a web page`}
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            title = {`CSS`}
            description = {`style it`}
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            title = {`JS`}
            description = {`implement dynamic features`}
            handler = {{handleStyle : toggleStyle}}
            />
            <Feature_box
            title = {`React`}
            description = {`let it be flexible`}
            handler = {{handleStyle : toggleStyle}}
            />
            </div>


        </div>
    )
}