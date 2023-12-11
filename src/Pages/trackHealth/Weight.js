import React, { useState } from "react";
import "./trackHealth.css";

const Weight = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="weight_container_middle_middle">
      <input
        type="text"
        className="weight_text_input"
        value={formData.weight}
        onChange={(event) =>
          setFormData({ ...formData, weight: event.target.value })
        }
      ></input>
      <div className="weight_switch-buttons">
        <div
          // className={`switch-button ${
          //   selectedOption === "kg" ? "weight_active" : ""
          // }`}
          // onClick={() => handleOptionChange("kg")}
          className="weight_active"
        >
          kg
        </div>
        {/* <div
          // className={`switch-button ${
          //   selectedOption === "lb" ? "weight_active" : ""
          // }`}
          // onClick={() => handleOptionChange("lb")}
          className="weight_active"

        >
          lb
        </div> */}
      </div>
    </div>
  );
};

export default Weight;
