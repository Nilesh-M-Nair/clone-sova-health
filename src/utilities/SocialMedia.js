import React from 'react';
import {socialMediaJSON} from '../data';
import '../styles/Utilities.css';

function SocialMedia(){

    const socialMedia = socialMediaJSON.map((media)=>{
        return <span key={media.id} className ='socialmedia__container'> 
         <a className= 'socialmedia__link' href={media.path}><img className='socialmedia__image' src={media.icon} alt={media.alt}/></a>
        </span>
    })

    return(
        <span className='socialmedia'>
            {socialMedia}
        </span>
    )
}

export default SocialMedia;