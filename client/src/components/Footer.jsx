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
      <div className="container">
        <div className="contact"><a href={'/services'}>Our Services</a></div>
        <div className="products"><a href={'/product'}>Products</a></div>
        <div className="address">
          B-130, Ayurvigyan Nagar,
          <br />
          AIIMS Campus,
          <br />
          New Delhi-110049
        </div>
        <div className="feedback"><a href={'/feedback'}>Feedback</a></div>
        <div className="newsletter"><a href={'/newsletter'}>Our Newsletter</a></div>
        <div className="email">
          <u>adi.zinikus@gmail.com</u>
          <br />
          <u>tanay.zinikus@gmail.com</u>
        </div>
        <div className="footerAbout"><a href='#about'>About Us</a></div>
        <div className="terms"><a href={'/termsConditions'}>Terms & Conditions</a></div>
        <div className="phone"><a href='tel:+91 98110031799'>+91 9810031799</a></div>
        <div className="footerIcons">
          <div className="flex margin">
            <a target='_blank' href='https://www.linkedin.com/company/zinikus-ai-pvt-ltd/?viewAsMember=true'>
              <AiFillLinkedin size={40} color='white'/>
            </a>
            <a target='_blank' href='https://youtube.com/@zinikus310'>
              <AiFillYoutube size={40} color='white'/>
            </a>
            <a target='_blank' href=' https://instagram.com/zinikus?igshid=MzRlODBiNWFlZA=='>
              <AiFillInstagram size={40} color='white'/>
            </a>
            <a target='_blank' href='https://twitter.com/ZinikusAI'>
              <AiFillTwitterCircle size={40} color='white'/>
            </a>
          </div>
        </div>
        <div
          className="footerLogo"
          style={{ paddingLeft: '55px', paddingTop: '20px' }}
        >
          <a href='/'><img style={{ width: '170px' }} src={zini} /></a>
        </div>
      </div>
      <div className="footerDivider"></div>
    </div>
  );
};

export default Footer;
