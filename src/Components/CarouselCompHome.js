// Carousel.js
import React, { useState, useEffect } from 'react';
import './CarouselCompHome.css';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Automatically move to the next slide every 3 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component is unmounted or when currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Run the effect whenever currentIndex changes

  return (
    <div className="carousel">
      <button onClick={prevSlide}>&lt;</button>
      <div className="slide-container">
        {slides.map((content, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
          >
            {content}
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;
