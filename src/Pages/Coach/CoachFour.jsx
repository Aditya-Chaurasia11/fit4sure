import React, { useState } from "react";
import "./coach4.css";
import { Link } from "react-router-dom";

const CoachFour = () => {
  const [selectedOption, setSelectedOption] = useState("Ft");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="coach4_container">
      <div className="coach4_container_upper">
        <div className="coach4_container_upper_left">
          <h1>Find your coach</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach4_container_upper_right">Step 2/6</div>
      </div>
      <div className="coach4_container_middle">
        <h1>Select your target height</h1>
        <div className="coach4_container_middle_middle">
          <input type="text" className="text_input"></input>
          <div className="switch-buttons">
            <div
              className={`switch-button ${
                selectedOption === "Ft" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("Ft")}
            >
              Ft
            </div>
            <div
              className={`switch-button ${
                selectedOption === "Cm" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("Cm")}
            >
              Cm
            </div>
          </div>
        </div>
        <div className="coach4_container_middle_button">
          <button className="first">Exit -></button>
          <Link to="/coach/5">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachFour;
