import React from 'react'
// Style
import './style.css'
import './darked.css'
// COMPONENETS
import Article_box from './Article_box_'
import { Link } from 'react-router-dom'
export default function Articles (prop){

    let pseudoArray = [0 , 1 , 2 , 3 , 4]

    var toggleStyle = (x) =>{
        return prop.state.darkMode_$ ? (x=='articles_' ? 'articles_da--' : x=='article_box' ? 'article_da_box--' : x=='infos_title' ? 'infos_da--title_' : x=='infos_tag' ? 'infos_da--tag_' : x=='infos_description' ? 'infos_da--description_' : 'UNDEFINED') : (x=='articles_' ? 'articles--' : x=='article_box' ? 'article_box--' : x=='infos_title' ? 'infos--title_' : x=='infos_tag' ? 'infos--tag_' : x=='infos_description' ? 'infos--description_' : 'UNDEFINED')
    }
    let BoxCreator = () => {
        return pseudoArray.map(i=>{
            return <Link className='link_' to={`/article/${i}`} key={i}> <Article_box handler={{handleStyle:toggleStyle}} /> </Link>
        })
    }
    return(
        <div className={toggleStyle('articles_')}>
            {BoxCreator()}
        </div>
    )
}