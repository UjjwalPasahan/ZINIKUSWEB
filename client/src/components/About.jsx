import React, { useRef, useEffect } from 'react';
import { Image, HStack, Button } from '@chakra-ui/react';
import '../styles/about.css';
import img5 from '../assets/homepage/dubai3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import thumbnail from '../assets/homepage/thumbnail.png';
import zoro3 from '../assets/homepage/zinikusWhatWeDo.mp4';
// import zini4 from '../assets/homepage/zini4.mp4'

const About = () => {
  // const observer = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     const s1 = entry.target.querySelector('.s1');
  //     const s2 = entry.target.querySelector('.s2');
  //     const s3 = entry.target.querySelector('.s3');

  //     if (entry.isIntersecting) {
  //       s1.classList.add('faltuHeading-animation');
  //       s2.classList.add('faltuText-animation');
  //       s3.classList.add('imgs-animation');
  //     return; // if we added the className, exit the function
  //     }

  //     // We're not intersecting, so remove the className!
  //     // square.classList.remove('square-animation');
  //   });
  // });

  // observer.observe(document.querySelector('.lowerAboutUs'));
  const observerRef = useRef(null);

  useEffect(() => {
    // Create the Intersection Observer instance
    observerRef.current = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation className
          entry.target.classList.add('faltuHeading-animation');
          entry.target.classList.add('faltuText-animation');
          entry.target.classList.add('imgs-animation');
        }
      });
    });

    // Observe the elements
    const faltuHeadingElement = document.querySelector('.faltuHeading');
    const faltuTextElement = document.querySelector('.faltuText');
    const imgsElement = document.querySelector('.imgs');

    if (faltuHeadingElement) {
      observerRef.current.observe(faltuHeadingElement);
    }
    if (faltuTextElement) {
      observerRef.current.observe(faltuTextElement);
    }
    if (imgsElement) {
      observerRef.current.observe(imgsElement);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="mainAbout">
      <div className="upperAbout" id="upperAbout">
        <div className="whiteLowerSpaceMaker"></div>
        {/* <div className='abouth2'><h2>ABOUT US</h2></div> */}
        <div className="h22">
          <h2>
            <a>ABOUT US</a>
          </h2>
        </div>
        <div className="whiteLowerSpaceMaker"></div>
        <div>
          <p className="aboutp">
            Finding Inspiration in Every Turn
            <br />
            We are dedicated to creating cutting-edge technology that pushes the
            boundaries of what's possible in the world of automation. Our team
            is composed of experts in various fields, including robotics,
            machine learning, computer science, and engineering. Together, we're
            creating a future where robots can perform complex tasks with ease,
            making our lives easier and more efficient.
            <br />
            At our company, we believe in constant innovation and collaboration.
            We're always looking for new ways to improve our products and
            services and are open to working with partners who share our vision.
            We're excited to be at the forefront of this exciting field and look
            forward to pushing the boundaries of what's possible in the world of
            A.I. and robotics.
          </p>
        </div>
      </div>

      <div className="about" id="about">
        <div className="lowerSpaceMaker"></div>
        <div className="midaboutus">
          <div className="headingtopabout">
            <h2>Here's what we do...</h2>
            <button className="headaboutbtn">
              <a href={'/product'}>View More</a>
            </button>
          </div>
          {/* <Carousel
            className="gallery"
            autoPlay={true}
            showArrows={true}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >

<div>
              <video
                controls
                width="640"
                height="360"
                className="videocarousel"
              >
               
                <source src={zini2} type="video/mp4" />
              </video>
            </div>
            <div className="videocarousel">
              <video
                controls
                width="640"
                height="360"
                className="videocarousel"
              >
                <source src={zini3} type="video/mp4" />
              </video>
            </div>

            <div className="videocarousel">
              <video
                controls
                width="640"
                height="360"
                className="videocarousel"
              >
                <source src={zoro3} type="video/mp4" />
              </video>
            </div>

          </Carousel> */}

          <div className="videocarousel">
            <video
              autoPlay
              controls
              muted
              // poster={thumbnail}
              width="640"
              height="360"
              className="videocarousel"
            >
              <source src={zoro3} type="video/mp4" />
            </video>
          </div>
        </div>

        <HStack className="lowerAboutUs" mt="40">
          <div className="lowerdivwrapper">
            <h2 className="faltuHeading faltuHeading-animation">
              <text style={{ color: '#702fff' }}>Oh!</text> <br /> And this
              <text style={{ color: '#702fff' }}>...</text>
            </h2>
            <h4 className="faltuText faltuText-animation">
              ZINIKUS at <a href="https://www.gitex.com/">Dubai GITEX.</a>
            </h4>
          </div>
          <div className="imgs imgs-animation">
            <Image src={img5} w="container.md" className="aboutimgl" />
          </div>
        </HStack>
      </div>
    </div>
  );
};

export default About;
