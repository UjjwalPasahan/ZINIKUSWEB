import React from 'react';
import '../styles/Footer.css';
import zini from '../assets/homepage/zinikus.png';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <hr className="defaultHR" />
      <div className="footerDivider"></div>
      <div className="container">
        <div className="contact element">
          <a href={'./services'}>Our Services</a>
        </div>
        <div className="products element">
          <a href={'./product'}>Products</a>
        </div>
        <div className="address element">
          Second Floor,
          <br />
          Greenfield Colony,
          <br />
          Faridabad-121010
        </div>
        <div className="feedback element">
          <a href={'./feedback'}>Feedback</a>
        </div>
        <div className="newsletter element">
          <a href={'./newsletter'}>Our Newsletter</a>
        </div>
        <div className="email element">
        <a href='mailto:adi.zinikus@gmail.com'>adi.zinikus@gmail.com</a>
          <br />
          <a href='mailto:tanay.zinikus@gmail.com'>tanay.zinikus@gmail.com</a>
        
        </div>
        <div className="footerAbout element">
          <a href="#upperAbout">About Us</a>
        </div>
        <div className="terms element">
          <a href={'./termsConditions'}>Terms & Conditions</a>
        </div>
        <div className="phone element">
          <a href="tel:+91 98110031799">+91 9810031799</a>
          <br />
          <a href="tel:+91 7011995400">+91 7011995400</a>
        </div>
        <div className="footerIcons">
          <div className="flex margin">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/zinikus-ai-pvt-ltd/?viewAsMember=true"
            >
              <AiFillLinkedin size={40} color="white" />
            </a>
            <a target="_blank" href="https://youtube.com/@zinikus310">
              <AiFillYoutube size={40} color="white" />
            </a>
            <a
              target="_blank"
              href=" https://instagram.com/zinikus?igshid=MzRlODBiNWFlZA=="
            >
              <AiFillInstagram size={40} color="white" />
            </a>
            <a target="_blank" href="https://twitter.com/ZinikusAI">
              <AiFillTwitterCircle size={40} color="white" />
            </a>
          </div>
        </div>
        <div className="footerLogo" style={{ paddingTop: '20px' }}>
          <a href="/">
            <img style={{ width: '170px' }} src={zini} />
          </a>
        </div>
      </div>
      <div className="footerDivider"></div>
    </div>
  );
};

export default Footer;
