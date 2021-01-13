import React from 'react';
import {headerJSON} from '../../data';
import './Header.css'

function Header(){

    const content = headerJSON.map((data)=>{
        return <span key={data.id} className ='data'>
            <img className='image' src={data.icon} alt={data.alt}/>
            <span className='content'>{data.content}</span>
        </span>
    })

    return(
        <div className = 'container'>
        <span className='header__heading'>REDEFINE YOUR RELATIONSHIP WITH FOOD</span>
        <span className='header__content'>{content}</span>
        </div>
    )
}

export default Header;