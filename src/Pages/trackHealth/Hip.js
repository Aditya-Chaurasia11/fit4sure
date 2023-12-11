import React, { useState } from "react";

const Hip = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="weight_container_middle_middle">
      <input
        type="text"
        className="weight_text_input"
        onChange={(event) =>
          setFormData({ ...formData, hip: event.target.value })
        }
      ></input>
      <div className="weight_switch-buttons">
        <div
          // className={`switch-button ${
          //   selectedOption === "kg" ? "weight_active" : ""
          // }`}
          // onClick={() => handleOptionChange("kg")}
        >
          cm
        </div>
        {/* <div
          className={`switch-button ${
            selectedOption === "lb" ? "weight_active" : ""
          }`}
          onClick={() => handleOptionChange("lb")}
        >
          lb
        </div> */}
      </div>
    </div>
  );
};

export default Hip;
