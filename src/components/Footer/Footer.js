import React from 'react'
import './Footer.css'

import FooterOverlay from '../FooterOverlay/FooterOverlay'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { NewsLetter } from '../NewsLetter/NewsLetter'
import { images } from '../../constants'

const Footer = () => {
  return (
    <div className='app__footer section__padding'>
                <FooterOverlay />
                <NewsLetter />

                <div className='app__footer-links'>

                    <div className='app__footer-links_contact'>
                        <h1 className='app__footer-headtext'>Contact Us</h1>
                        <p className='p__opensans'>9 W 53rd St, New York, NY 1009 street, USA</p>
                        <p className='p__opensans'>+123 3554 343</p>
                        <p className='p__opensans'>+432 5845 234</p>
                    </div>

                    <div className='app__footer-links_logo'>
                        <img src={images.gericht} alt="footer_logo" />
                        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
                        <img className='spoon__img' src={images.spoon} alt="spoon" style={{marginTop:'15'}} />
              <div className="app__footer-links_icons">
                <FiFacebook />
                <FiTwitter />
                <FiInstagram />
              </div>
                    </div>

                    <div className="app__footer-links_work">
                    <h1 className='app__footer-headtext'>Working hours</h1>
                        <p className='p__opensans'>Monday-Friday:</p>
                        <p className='p__opensans'>08:00 Am - 12:00 Am - </p>
                        <p className='p__opensans'>Saturday-Sunday</p>
                        <p className='p__opensans'>07:00 Am - 11:00 Am - </p>
                    </div>

                </div>
                    <div className='footer__copyright'>
                        <p className='p__opensans'> 2022 Gericht. All Rights reserved</p>
                    </div>
    </div>
  )
}

export default Footer