import React,{useRef,useEffect} from 'react';
import {
  Image,
  HStack,
  Button,
} from '@chakra-ui/react';
import img4 from '../assets/homepage/bg.png';
import '../styles/about.css';
import img5 from '../assets/homepage/dubai3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

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
    <div className="about" id="about">
      <div className='upperAbout'>
      <div className='lowerSpaceMaker' ></div>
      {/* <div className='abouth2'><h2>ABOUT US</h2></div> */}
      <div className='h22'><h2>ABOUT US</h2></div>
      <div className='lowerSpaceMaker' ></div>
      <div><p className='aboutp' >
      Finding Inspiration in Every Turn
<br/>
We are dedicated to creating cutting-edge technology that pushes the boundaries of what's possible in the world of automation. Our team is composed of experts in various fields, including robotics, machine learning, computer science, and engineering. Together, we're creating a future where robots can perform complex tasks with ease, making our lives easier and more efficient.

<br/>

At our company, we believe in constant innovation and collaboration. We're always looking for new ways to improve our products and services and are open to working with partners who share our vision. We're excited to be at the forefront of this exciting field and look forward to pushing the boundaries of what's possible in the world of A.I. and robotics.
      </p></div>
      </div>

      <div className="midaboutus">
        <div className="headingtopabout">
          <h2>Here's what we do...</h2>
          <button className="headaboutbtn">
            <a href={'/product'}>View More</a>
          </button>
        </div>
        <Carousel
          className="gallery"
          autoPlay={true}
          showArrows={false}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-japanese-illustration-cherry-tree-petals_23-2149601832.jpg?t=st=1692856256~exp=1692856856~hmac=5957f66c8678872604addc840e76d7bdea7fb92421749499ad0e0120bed07f9c"
              className="gallery-img"
            />
          </div>
          <div style={{ borderRadius: '5%' }}>
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-media-naranja-illustration_23-2150074406.jpg?t=st=1692856256~exp=1692856856~hmac=f2116a0607e75e6ad6c721439730ff8312e44f83369c18c6baa97bbde5df05f0"
              className="gallery-img"
            />
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-vector/cute-black-bear-wearing-blanket-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-8842.jpg?size=626&ext=jpg&uid=R97150559&ga=GA1.2.809554958.1684743455&semt=sph"
              className="gallery-img"
            />
          </div>
        </Carousel>
      </div>

      <HStack className="lowerAboutUs" mt="40">
        <div className="lowerdivwrapper">
          <h2 className="faltuHeading faltuHeading-animation">
            <text style={{ color: '#702fff' }}>Oh!</text> <br /> And this
            <text style={{ color: '#702fff' }}>...</text>
          </h2>
          <h4 className="faltuText faltuText-animation">
            ZINIKUS at <a href="">Dubai GITEX.</a>
          </h4>
        </div>
        <div className="imgs imgs-animation">
          <Image src={img5} w="container.md" className="aboutimgl" />
        </div>
      </HStack>
    </div>
  );
};

export default About;
