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
    <h1 className="headtext zh">Zini</h1>
    <p>The Reception Robot - ZINI</p><br/>
  </div>
  <div className="product-section">
    <h2 className="headtext" >Introduction</h2>
    <p>Welcome to the Future of Workplace Efficiency with ZINI - The Reception Robot</p>
  </div><br/>
  <div className="product-section">
    <h2 className="headtext" >Advanced Features</h2>
    <p>
    1. Intelligent Greeting System: ZINI's advanced AI algorithms enable it to recognize and greet visitors
with a personalized touch, enhancing their experience from the moment they step through the door.
<br/>
2. Effortless Navigation: Equipped with state-of-the-art sensors and mapping technology, ZINI
navigates seamlessly through complex environments, ensuring it can efficiently guide visitors to their
desired destinations.
<br/>
3. Interactive Touchscreen: The interactive touchscreen interface on ZINI's sleek exterior allows guests
to effortlessly interact with the robot, providing them with real-time information, directions, and even
scheduling assistance.
<br/>
4. Multi-language Support: ZINI's language capabilities transcend borders, enabling it to communicate
fluently with visitors from around the world, breaking down language barriers effortlessly.
<br/>
5. Smart Visitor Management: ZINI streamlines the check-in process with its integrated visitor
management system, notifying hosts of their guests' arrival, and enhancing security by capturing
photos and printing visitor badges.<br/>
    </p>
  </div><br/>
  <div className="product-section">
    <h2 className="headtext" >Advantages</h2>
    <p>
    1. First Impressions Matter: ZINI creates a lasting first impression, showcasing your commitment to
innovation and efficiency as it warmly welcomes visitors and directs them with precision.
<br/>
2. Time and Resource Efficiency: By automating reception tasks, ZINI allows your human workforce to
focus on high-value activities, boosting overall productivity and optimizing resource allocation.
<br/>
3. 24/7 Accessibility: ZINI tirelessly serves around the clock, ensuring your business never misses a
beat, even during non-operational hours.
<br/>
4. Enhanced Visitor Experience: ZINI's intuitive interaction, combined with its ability to provide instant
information and directions, guarantees an elevated guest experience that reflects positively on your
brand.
<br/>
5. Data-Driven Insights: ZINI's analytical capabilities gather valuable data on visitor traffic and
preferences, empowering you to make informed decisions to improve workplace dynamics and
layouts.
    </p><br/>
  </div>
  <div className="product-section">
    <h2 className="headtext" >Why You Need ZINI</h2><br/>
    <p>In today's fast-paced business landscape, staying ahead requires embracing innovation. ZINI is not just
a robot; it's an investment in the future of your company. Here's why your workplace can't afford to
overlook ZINI:
<br/>
1. Modernize Your Brand: Display your company's forward-thinking ethos by introducing ZINI as the
face of your organization, showcasing your commitment to cutting-edge technology.
<br/>
2. Efficiency Redefined: With ZINI at the helm of your reception, mundane tasks are automated,
allowing your team to focus on strategic initiatives that drive growth.
<br/>
3. Impress and Engage: ZINI captivates visitors with its interactive features, leaving a lasting impression
that sets your workplace apart.
<br/>
4. Unparalleled Convenience: ZINI seamlessly guides guests, enhancing their visit while promoting a
streamlined environment that resonates with efficiency.</p><br/>
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