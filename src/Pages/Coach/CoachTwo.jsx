import React, { useState } from "react";
import "./coach2.css";
import { Link } from "react-router-dom";

const CoachTwo = () => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="coach2_container">
      <div className="coach2_container_upper">
        <div className="coach2_container_upper_left">
          <h1>Find your coach</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach2_container_upper_right">Step 2/6</div>
      </div>
      <div className="coach2_container_middle">
        <h1>Select your target weight</h1>
        <div className="coach2_container_middle_middle">
          <input type="text" className="text_input"></input>
          <div className="switch-buttons">
            <div
              className={`switch-button ${
                selectedOption === "kg" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("kg")}
            >
              kg
            </div>
            <div
              className={`switch-button ${
                selectedOption === "lb" ? "active" : ""
              }`}
              onClick={() => handleOptionChange("lb")}
            >
              lb
            </div>
          </div>
        </div>
        <div className="coach2_container_middle_button">
          <button className="first">Exit -></button>
          <Link to="/coach/3">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachTwo;
