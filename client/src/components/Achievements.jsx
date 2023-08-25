import React, { useEffect, useRef, useState } from 'react';
import '../styles/Achievements.css';
const Achievements = () => {
  const observerRef = useRef(null);
  useEffect(() => {
    // Create the Intersection Observer instance
    observerRef.current = new IntersectionObserver(entries => {
      // Loop over the entries
      entries.forEach(entry => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation className
          entry.target.classList.add('achieveImage-animation');
        }
      });
    });

    // Observe the elements
    const achieveImage = document.querySelector('.achieveImage');

    if (achieveImage) {
      observerRef.current.observe(achieveImage);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className="Achieve">
      <div className="divider"></div>
      <h2>
        <a>Achievements</a>
      </h2>
      <div className="achieveImage achieveImage-animation"></div>
    </div>
  );
};

export default Achievements;
