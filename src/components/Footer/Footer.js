import React from 'react';
import SocialMedia from '../../utilities/SocialMedia'
import './Footer.css'

function Footer(){

    return(
        <>
        <span className='footer'>
            <div className='footer__container'>
                <div className='footer__newsletter'>
                    <span className='footer__newsletter-content'>
                        <span className='footer__newsletter-text'>
                            Just good content. No spam. <br/>
                            Sign up for our newsletter
                        </span>
                    </span>
                    <span className='footer__newsletter-input'>
                        <input className='newsletter-inputField' type="text" placeholder="   Your email" name="mail" required />
                        <span className='newsletter-inputButton'>Submit</span>
                    </span>
                </div>
                <div className='footer__contact'>
                    <span className='footer_contact_details1'>
                        <img className='footer__icon1' src='icons/call.webp' alt='te'/>
                        <span className= 'footer_number'>
                            +91 9811 574 691
                        </span>
                    </span>
                    <span className='footer_contact_details2' id='footer_mail'>
                        <img className='footer__icon2' src='icons/message.webp' alt='te'/>
                        <span><a className='footer__mail_id' href="mailto:support@sova.health?Subject=Enquiry">support@sova.health</a></span>
                    </span>
                </div>
            </div>
            <div className='footer__socialmedia'>
                <SocialMedia/>
                <span className='footer__bottom_text'> WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED</span>
            </div>
        </span>
        </>
    )

}

export default Footer;