import React,{useState} from 'react';
import { CgMoveLeft, CgRemote } from 'react-icons/cg';
import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar(){
    const [click,setClick]= useState(false);

    const handleClick =()=>{
        setClick(!click)
        console.log(click)
    }
    return(
        <>
        <nav className ='navbar'>
            <span className ='navbar__container'>
                <span className = 'container__1'>
                    <NavLink className="navbar__logo_container" to="/"><img className='navbar__logo' src='images/sova_FINAL-02.webp' alt ='logo'/></NavLink>
                </span>
                <span className='menu-icon' onClick={() => {handleClick()}} >
                    {click ? <CgRemote className='cheese-menu-open' />: <CgMoveLeft className='cheese-menu-open'/>}
                </span>
                <span className = 'container__2'  id={click?'navbar__hidden_1':null}>
                <span className = 'navbar__menu'>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/">Home</NavLink>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/howitworks">how it works</NavLink>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/pricing">pricing</NavLink>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/science">science</NavLink>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/faqs">faqs</NavLink>
                        <NavLink className='navbar__link' activeStyle={{cursor: 'pointer',color: '#ff555f', fontWeight: "bold"}} exact to="/aboutus">about us</NavLink>
                </span>
                </span>
                <span className = 'container__3' id={click?'navbar__hidden_2':null}>
                    <a className='navbar__button' href='https://app.sova.health/'>Get started</a>
                </span>
            </span>
        </nav>
        </>
    )
}

export default Navbar;