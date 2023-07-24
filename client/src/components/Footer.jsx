import React from 'react'
import '../styles/Footer.css'
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
        <div className='footerIcons'>Icons</div>
        <div className='footerLogo'>Zinikus</div>
      </div>
      <div className='footerDivider'></div>


    </div>

  )
}

export default Footer;