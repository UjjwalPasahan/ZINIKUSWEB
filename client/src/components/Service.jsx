import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header';
import mouseScroll from '../assets/homepage/mouseScroll.svg';
import '../styles/services.css';
const Service = () => {
  return (
    <div className="services">
      <Header />
      {/* <div className="callingLady">
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
      </div> */}
      <div className="servicesGlassyEffect"></div>
      <div className="ourServices">
        <h1 style={{ paddingTop: '6rem' }}>
          {' '}
          <a href="">Our Services</a>
        </h1>
        {/* <div className="gradC1"></div>
        <div className="gradE1"></div> */}
        <div className="serviceContainer">
          <div className="el1"></div>
          <div className="el2">
            <p>
              <span className="gridHeading">
                <a href="">Robotics Solution</a>
              </span>{' '}
              <br /> <br />
              Revolutionize your operations with our advanced robotic solutions.
              Our expert team designs, develops, and implements custom robotic
              systems tailored to your specific needs. From industrial
              automation to autonomous vehicles, our robotic solutions optimize
              efficiency, increase productivity, and reduce operational costs.
            </p>
          </div>

          <div className="el3">
            <p>
              <span className="gridHeading">
                <a href="">Artificial Intelligence Integration</a>
              </span>{' '}
              <br /> <br />
              Unlock the potential of Artificial Intelligence with our seamless
              integration services. Our AI experts work closely with your team
              to embed AI capabilities into your existing processes and
              applications. Whether it's machine learning algorithms, natural
              language processing, or computer vision, we empower your business
              with intelligent insights and automation.
            </p>
          </div>

          <div className="el4"></div>

          <div className="el5"></div>
          <div className="el6">
            <p>
              <span className="gridHeading">
                <a href="">Automation Consulting</a>
              </span>{' '}
              <br /> <br />
              Navigating the realm of automation can be daunting. Our
              experienced consultants offer strategic guidance to help you make
              informed decisions. We assess your business processes, identify
              automation opportunities, and develop a roadmap for successful
              implementation, ensuring a smooth transition toward a more
              efficient future.
            </p>
          </div>

          <div className="el7">
            <p>
              <span className="gridHeading">
                <a href="">Maintenance and Support</a>
              </span>{' '}
              <br /> <br />
              We believe in long-term partnerships. Our dedicated maintenance
              and support services ensure that your robotic and AI systems
              continue to operate at peak performance. Our responsive team is
              ready to address any issues, provide updates, and optimize your
              solutions for sustained success.
            </p>
          </div>
          <div className="gradC1"></div>
          <div className="gradE1"></div>
          <div className="el8"></div>
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
