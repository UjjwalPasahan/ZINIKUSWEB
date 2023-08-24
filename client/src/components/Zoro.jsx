import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import zoro1 from '../assets/homepage/ZORO2.jpg'
import zoro2 from '../assets/homepage/ZORO3.jpeg'
import zoro3 from '../assets/homepage/ZORO.mp4'
import '../styles/zini.css'
import '../styles/news.css';
import { MdKeyboardBackspace } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Zoro = () => {
  return (
    <div> <div className='back backbtn' >
    <Link to={'/product'}>
      <MdKeyboardBackspace size={30} />
    </Link>
  </div>
<div className="product-page">
  <div className="carousel-container" >
    <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={false} showStatus={false}>
    <div className='carousel-containerimg'>
        <img src={zoro2} alt="" className='carousel-containerimg'/>
      </div>
  <div className="product-section carousel-containerimg">
    <video controls>
      <source src={zoro3} type="video/mp4" />
     </video>
  </div>
      <div className='carousel-containerimg'>
        <img src={zoro1} alt="" className='carousel-containerimg'/>
      </div>
    </Carousel>
  </div><br/><br/>
  <div className="product-details">
    <h1 className="headtext zh">Zoro</h1>
    <p>Your Ultimate Butler/Delivery Robot from ZINIKUS</p><br/>
  </div>
  <div className="product-section">
    <h2 className="headtext" >Introduction</h2>
    <p>Welcome to the future of workplace efficiency and hospitality with ZORO, the revolutionary
Butler/Delivery Robot designed to redefine how your business operates and interacts.</p>
  </div><br/>
  <div className="product-section">
    <h2 className="headtext" >Advanced Features</h2>
    <p>
    1. Seamless Navigation: ZORO effortlessly navigates through dynamic environments using advanced
mapping and obstacle avoidance technology, ensuring swift and secure deliveries.
<br/>
2. Versatile Cargo Space: ZORO's adaptable cargo compartment accommodates various payloads, from
documents to packages, enhancing its capacity to serve multiple departments within your
organization.
<br/>
3. Human Interaction: Equipped with a friendly interface, ZORO intuitively communicates with staff
and guests, offering a seamless interaction experience and personalized service.
<br/>
4. Smart Routing: ZORO optimizes delivery routes in real-time, reducing delivery times and ensuring
efficient allocation of resources, even in complex office layouts.
<br/>
5. Secure Access: ZORO's secure access protocols and facial recognition technology guarantee
authorized access to specific areas, safeguarding sensitive information and valuable<br/>
    </p>
  </div><br/>
  <div className="product-section">
    <h2 className="headtext" >Advantages</h2>
    <p>
    1. Efficiency Redefined: ZORO streamlines internal logistics and delivery processes, minimizing human
error and saving valuable time and resources, resulting in improved overall productivity.
<br/>
2. Enhanced Guest Experience: Impress clients and visitors by showcasing ZORO's cutting-edge
capabilities, leaving a lasting impression of innovation and sophistication.
<br/>
3. 24/7 Reliability: ZORO works around the clock, ensuring consistent and timely deliveries, reducing
delays, and ensuring business continuity.
<br/>
4. Resource Optimization: By delegating routine delivery tasks to ZORO, your human workforce is
liberated to focus on strategic projects and high-value tasks.
<br/>
5. Data-Driven Insights: ZORO's tracking and analytics provide valuable insights into delivery patterns,
helping you optimize workflows and make informed decisions.
    </p><br/>
  </div>
  <div className="product-section">
    <h2 className="headtext" >Why You Need ZINI</h2><br/>
    <p>Embrace the future of workplace efficiency and elevate your business with ZORO as your trusted
Butler/Delivery Robot. Here's why ZORO is an indispensable addition to your workplace:
<br/>
1. Elevate Your Image: Present your company as a forward-thinking industry leader by integrating ZORO
into your operations, exemplifying your commitment to technological advancement.
<br/>
2. Time and Cost Savings: ZORO's efficient deliveries and automated processes lead to significant time
and cost savings, driving operational excellence.
<br/>
3. Customer-Centric Approach: Impress clients and partners with ZORO's personalized service,
showcasing your dedication to exceptional customer experiences.
<br/>
4. Enhanced Security: ZORO enhances security protocols by restricting access to authorized personnel
only, safeguarding sensitive areas and information.
<br/>
5. Future-Proof Your Business: Adapt to the demands of modern workplaces by incorporating ZORO, a
tangible investment that positions your business for success in a tech-driven world.</p><br/>
  </div>
  <div className="product-section">
    <h2 className="headtext" >Conclusion</h2><br/>
    <p>ZINI isn't just a receptionist; it's an embodiment of progress, sophistication, and
streamlined operations. Elevate your workplace experience, captivate visitors, and embark on a
journey of innovation with ZINI by your side. Contact us today to learn how ZINI can redefine your
workplace dynamics and become the cornerstone of your business success.</p><br/>
  </div>
</div>
</div>
  )
}

export default Zoro