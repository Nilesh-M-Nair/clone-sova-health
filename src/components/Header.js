import React from 'react';
import {Link} from "react-router-dom";
import './Header.css'

function Header(){
    return(
        <div className ='header'>
            <div className='header__container'>
                <Link to="/"><img className='header__logo' src='images/sova_FINAL-02.webp' alt ='logo'/></Link>
                <nav className = 'header__nav' >
                        <Link className='header__routes' to="/">Home</Link>
                        <Link className='header__routes' to="/howitworks">howitworks</Link>
                        <Link className='header__routes' to="/pricing">pricing</Link>
                        <Link className='header__routes' to="/science">science</Link>
                        <Link className='header__routes' to="/faqs">faqs</Link>
                        <Link className='header__routes' to="/aboutus">about us</Link>
                </nav>
                <a href='https://app.sova.health/'>Get started</a>
            </div>
        </div>
    )
}

export default Header;