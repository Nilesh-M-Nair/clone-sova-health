import React from 'react';
import './Header.css'

function Container({heading, content, styling}){

    return(
        <div style={styling?{styling}:null} className = 'container'>
            <span style={styling?{styling}:null} className='header__heading'>{heading}</span>
            <span style={styling?{styling}:null} className='header__content'>{content}</span>
        </div>
    )
}

export default Container;