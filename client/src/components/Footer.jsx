import React from 'react';
import '../styles/Footer.css';
import zini from '../assets/homepage/zinikus.png';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <hr className="defaultHR" />
      <div className="footerDivider"></div>
      <div class="container">
        <div class="contact"><Link to={'/contact'}>Contact</Link></div>
        <div class="products"><Link to={'/product'}>Products</Link></div>
        <div class="address">
          B-130, Ayurvigyan Nagar,
          <br />
          AIIMS Campus,
          <br />
          New Delhi-110049
        </div>
        <div class="feedback"><Link to={'/feedback'}>Feedback</Link></div>
        <div class="newsletter"><Link to={'/newsletter'}>Our Newsletter</Link></div>
        <div class="email">
          <u>adi.zinikus@gmail.com</u>
          <br />
          <u>tanay.zinikus@gmail.com</u>
        </div>
        <div class="footerAbout"><Link to={'/about'}>About Us</Link></div>
        <div class="terms"><Link to={'/termsConditions'}>Terms & Conditions</Link></div>
        <div class="phone"><a href='tel:+91 98110031799'>+91 9810031799</a></div>
        <div className="footerIcons">
          <div className="flex margin">
            <a target='_blank' href='https://www.linkedin.com/company/zinikus-ai-pvt-ltd/?viewAsMember=true'>
              <AiFillLinkedin size={40} />
            </a>
            <a target='_blank' href='https://youtube.com/@zinikus310'>
              <AiFillYoutube size={40} />
            </a>
            <a target='_blank' href=' https://instagram.com/zinikus?igshid=MzRlODBiNWFlZA=='>
              <AiFillInstagram size={40} />
            </a>
            <a target='_blank' href='https://twitter.com/ZinikusAI'>
              <AiFillTwitterCircle size={40} />
            </a>
          </div>
        </div>
        <div
          className="footerLogo"
          style={{ paddingLeft: '55px', paddingTop: '20px' }}
        >
          <Link to='/'><img style={{ width: '170px' }} src={zini} /></Link>
        </div>
      </div>
      <div className="footerDivider"></div>
    </div>
  );
};

export default Footer;
