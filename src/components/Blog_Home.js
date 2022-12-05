import React from "react";
import { Navbar } from "./Home_";

export default function B_H (prop) {

    var outDiv_s = {
        minHeight:'100vh',
        width:'100vw',
        overflow:'hidden',
    }
    var navDiv_ = {
        position:'fixed',
        width:'100%',
    }
    var outDiv_1 = {
        backgroundImage:`url('https://github.com/bugixtix/Portfolio/issues/1#issue-1475761779')`,
        width:'100%',
        heigh:'100%',
    }

    return(

        <div style={outDiv_s}>
            <div style={navDiv_}>
            <Navbar darkMode_$={prop.darkMode_$} setDarkMode_$={prop.setDarkMode_$} winWidth_$={prop.winWidth_$}/>
            </div>
            <div style={outDiv_1}>

            </div>
        </div>
    )
}