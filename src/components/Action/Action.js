import React from 'react';
import { Link } from 'react-router-dom';
import './Action.css'

function Action(){
    return(
        <div className='action'>
            <div className ='action__container' >
                <div className='action__content'>
                    <span className='action__content_h'>Discover a Healthier You</span>
                    <span className ='action__content_p'>Get a personalized nutrition program based on your lifestyle, habits and blood analysis.</span>
                    <Link className = 'action__content_link' to ='/howitworks'>Learn more</Link>
                </div>
                <img className='action__image' src ='images/HP_Image.webp' alt = 'HP_Image.png'/>
            </div>
        </div>
    )
}

export default Action;