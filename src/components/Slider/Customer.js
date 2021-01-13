import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {customersJSON} from '../../data'
import { FiChevronLeft ,FiChevronRight } from "react-icons/fi";
import './slide.css'

const zero = 0;
const number = 2;

function Customer(){

    const [user,setUser] = useState(0)

    const change = () => {
       return  user < 2 ? setUser(user+1): setUser(zero)
    }

    const changeback = () =>{
        return user > 0 ? setUser(user-1) : setUser(number)
    }

    useEffect(()=>{
        const interval = setInterval(change, 5000)
        return () => {
            clearInterval(interval)
        }
    })

    return(
        <span className='slider'>
            <span>
            <FiChevronLeft className='slider__backward' onClick={changeback}/>
            </span>
            <span className='slider__container'> 
                <span className="slider__avatar_container">
                <Avatar className="slider__avatar" alt={customersJSON[user].alt} src={customersJSON[user].image} />
                </span>
                <span className='slider__content'>
                    <span className='slider__text' >{customersJSON[user].text}</span>
                    <span className='slider__name'>- {customersJSON[user].name}</span>
                </span>
            </span>
            <span>
                <FiChevronRight className='slider__forward' onClick={change}/>
            </span>
        </span>
        
    )
        
}

export default Customer;

// <Avatar style ={{width:'200px', height:'200px'}} alt={customersJSON[user].alt} src={customersJSON[user].image} />


