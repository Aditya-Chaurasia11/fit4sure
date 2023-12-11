import React, { useState } from "react";
import "./coach3.css";
import { Link } from "react-router-dom";

const CoachThree = () => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const [count, setCount] = useState(70);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="coach3_container">
      <div className="coach3_container_upper">
        <div className="coach3_container_upper_left">
          <h1>Find your coach</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach3_container_upper_right">Step 2/6</div>
      </div>
      <div className="coach3_container_middle">
        <h1>Select your target weight</h1>
        <div className="coach3_container_middle_middle">
          <div className="coach3_container_middle_middle_first">
            <span class="material-symbols-outlined" onClick={decrement}>remove</span>
            <p className="coach3_container_middle_middle_first_p">{count}</p>
            <span class="material-symbols-outlined" onClick={increment}>add</span>
          </div>
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
        <div className="coach3_container_middle_button">
          <button className="first">Exit -></button>
          <Link to="/coach/4">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachThree;
