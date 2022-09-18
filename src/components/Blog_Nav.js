import React, { useState, useEffect } from "react";
// style

export default function Blog_Nav (prop) {
    var [screenTop_$, setST_$] = useState(window.scrollY)

    var ul_Style = {
        backgroundColor:'rgba(0,0,0,0.2)',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        width:'100vw',
        position:'fixed',
        top:screenTop_$<70 ? `${70-screenTop_$}px` : `0px`,
        left:'0',
        listStyle:'none'
    }

    var li_Style = {
        padding:'0px 20px',
        fontSize:'22px',
        fontWeight:'600',
        cursor:'pointer',
        

    }

    useEffect(()=>{
        setUS_$(ul_Style)
        setST_$(window.scrollY)
    },[window.scrollY])
    var [ul_Style_$, setUS_$] = useState(ul_Style)
    
    var scrolling = () => {
        setST_$(window.scrollY)
    }
    window.addEventListener('scroll', scrolling)

    return(
        <div>

            <ul className="nav_ul" style={ul_Style_$}>
                <li className="nav_li" style={li_Style}> option I</li>
                <li className="nav_li" style={li_Style}> option I</li>
                <li className="nav_li" style={li_Style}> option I</li>
                <li className="nav_li" style={li_Style}> option I</li>
            </ul>

        </div>
    )
}