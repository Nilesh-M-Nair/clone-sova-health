import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {customersJSON} from '../../data'
import './Slider.css'

const zero = 0;
const number = 2;

function Slider(){

    const [user,setUser] = useState(0);

    const next = () => {
       return  user < 2 ? setUser(user+1): setUser(zero)
    }

    const back = () =>{
        return user > 0 ? setUser(user-1) : setUser(number)
    }

    useEffect(()=>{
        const interval = setInterval(next, 5000)
        return () => {
            clearInterval(interval)
        }
    })

    return(
        <div className="slider" style={{width:'100%',backgroundColor:'white'}} >
             <span className='slider__left'> </span>
             <span className='slider__customer'>
                {/* <span className='slider__image'> */}
                    <Avatar className='slider__Avatar' style ={{width:'200px', height:'200px'}} alt={customersJSON[user].alt} src={customersJSON[user].image}/>
                {/* </span> */}
                <span>
                    <span className='slider__feedback'>
                        {customersJSON[user].text}
                    </span>
                    <span className='slider__name'>
                        {customersJSON[user].name}
                    </span>
                </span>
             </span>
             <span>
                {/* <span className='slider__nav'>
                    <span className="dot" onClick={setUser(zero)}></span> 
                    <span className="dot" onClick={setUser(zero)}></span> 
                    <span className="dot" onClick={setUser(number)}></span> 
                </span> */}
             </span>
             <span className='slider__right'>
        
             </span>
        </div>
    )
        
}

export default Slider;