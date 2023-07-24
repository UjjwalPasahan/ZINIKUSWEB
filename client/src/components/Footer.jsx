import React from 'react'
import '../styles/Footer.css'
import zini from '../assets/homepage/zinikus.png'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram,AiFillYoutube} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer' >
      <hr className='defaultHR' />
      <div className='footerDivider'></div>
      <div class="container">
        <div class="contact">Contact</div>
        <div class="products">Products</div>
        <div class="address">B-130, Ayurvigyan Nagar,<br/>
          AIIMS Campus,<br/>
            New Delhi-110049</div>
        <div class="feedback">Feedback</div>
        <div class="newsletter">Our Newsletter</div>
        <div class="email"><u>adi.zinikus@gmail.com</u><br/>
          <u>tanay.zinikus@gmail.com</u></div>
        <div class="footerAbout">About Us</div>
        <div class="terms">Terms & Conditions</div>
        <div class="phone">+91 9810031799</div>
        <div className='footerIcons'>
          <div className='flex margin'>
            <a><AiFillLinkedin size={40}/></a>
            <a><AiFillYoutube size={40}/></a>
            <a><AiFillInstagram size={40}/></a>
            <a><AiFillGithub size={40}/></a>
          </div>
        </div>
        <div className='footerLogo' style={{paddingLeft:'20px',paddingTop:'20px' }}><img src={zini}/></div>
      </div>
      <div className='footerDivider'></div>


    </div>

  )
}

export default Footer;