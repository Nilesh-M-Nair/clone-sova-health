import React from 'react';
import Footer from '../../components/Footer/Footer';

import Customer from '../../components/Slider/Customer';
import './HowItWorks.css'

function HowItWorks(){
    return(
        <div className='howitworks'>
            {/* <p>How Its Work</p> */}
            <Customer/>
            <Footer/>
        </div>
    )
}

export default HowItWorks;