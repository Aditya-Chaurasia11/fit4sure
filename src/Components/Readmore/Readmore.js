import React, { useState } from "react";
import "./read.css";
import { Link } from "react-router-dom";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <div className="readmore_container">
          <p>{text.slice(0, maxLength)}</p>
          {text.length > maxLength && (
            <div className="services_container_card_button">
              <button onClick={toggleTruncate}>Read More</button>
            </div>
          )}
        </div>
      ) : (
        <div className="readmore_container">
          <p>{text}</p>
          <div className="services_container_card_button_two">
            <Link to="/contact">
              <button>Talk to us</button>
            </Link>
            <Link to="/plans">
              <button>Plans</button>
            </Link>
          </div>
          <div className="services_container_card_button">
            <button onClick={toggleTruncate}>Read Less</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMore;
