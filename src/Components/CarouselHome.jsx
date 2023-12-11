import React, { useState } from "react";
import "./CarouselHome.css"; // Import your CSS file for styling

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide}>&lt;</button>
      <div className="slide-container">
        {items.map((item, index) => (
          <div
            key={index}
            className={index === currentIndex ? "slide active" : "slide"}
          >
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;
