import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header';
import mouseScroll from '../assets/homepage/mouseScroll.svg';
import '../styles/services.css';
const Service = () => {
  return (
    <div className="services">
      <Header />
      <div className="callingLady">
        <div className="gradC1"></div>
        <div className="gradE1"></div>
        <div className="servicesGlassyEffect"></div>
        <div className="callHeading">
          <h1>How can we help?</h1>
          <p>
            <span style={{ wordSpacing: '0.5rem', display: 'flex' }}>Scroll <div class='mouse-container'>
              <div class='mouse'>
                <span class='scroll-down'></span>
              </div>
            </div> for more</span>
          </p>
        </div>
      </div>
      <div className="ourServices">
        <h1>Our Services</h1>
        <div className="gradC1"></div>
        <div className="gradE1"></div>
        <div className="serviceContainer">
          <div className="el1"></div>
          <div className="el2">
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.Why do we use it?It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-
            </p>
          </div>

          <div className="el3">
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.Why do we use it?It is a long established
              fact that a reader will be distracted by the readable content of a
              page when looking at its layout. The point of using Lorem Ipsum is
              that it has a more-or-
            </p>
          </div>
          <div className="gradC1"></div>
          <div className="gradE1"></div>
          <div className="el4"></div>
        </div>
      </div>

      <div className="ContactspaceMaker"></div>
      <div className="gradC1"></div>
      <div className="gradE1" style={{ maxHeight: '400px' }}></div>
      <Footer />
    </div>
  );
};

export default Service;
