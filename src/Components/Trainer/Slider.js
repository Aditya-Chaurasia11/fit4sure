import React, { useState, useEffect } from "react";
import "./slider.css";

const CarouselSlider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + children.length) % children.length);
  };

  const renderItems = () => {
    const visibleItems = children.slice(
      currentIndex,
      currentIndex + itemsPerPage
    );
    const remaining = itemsPerPage - visibleItems.length;

    if (remaining > 0) {
      visibleItems.push(...children.slice(0, remaining));
    }

    return visibleItems;
  };

  return (
    <div className="carousel-slider-trainer">
      <svg
        width="33"
        onClick={handlePrev}
        height="21"
        viewBox="0 0 33 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.78 20.882L22.476 10.486L32.78 0.135998H25.374L15.07 10.486L25.374 20.882H32.78Z"
          fill="white"
          fill-opacity="0.4"
        />
        <path
          d="M17.78 20.882L7.476 10.486L17.78 0.135998H10.374L0.0699994 10.486L10.374 20.882H17.78Z"
          fill="white"
        />
      </svg>

      {/* <button >Previous</button> */}
      <div className="carousel_container">
        {renderItems().map((item, index) => (
          <div className="carousel-item-trainer" key={index}>
            {item}
          </div>
        ))}
      </div>
      <svg
        width="33"
        height="21"
        viewBox="0 0 33 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleNext}
      >
        <path
          d="M0.22 20.882L10.524 10.486L0.22 0.135998H7.626L17.93 10.486L7.626 20.882H0.22Z"
          fill="white"
          fill-opacity="0.4"
        />
        <path
          d="M15.22 20.882L25.524 10.486L15.22 0.135998H22.626L32.93 10.486L22.626 20.882H15.22Z"
          fill="white"
        />
      </svg>

      {/* <button >Next</button> */}
    </div>
  );
};

export default CarouselSlider;
