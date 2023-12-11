import React, { useState } from "react";

const Height = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };
  return (
    <div className="weight_container_middle_middle">
      <input type="text" className="weight_text_input" onChange={(event) =>
          setFormData({ ...formData, height: event.target.value })
        }></input>
      <div className="weight_switch-buttons">
        <div
          // className={`switch-button ${
          //   selectedOption === "kg" ? "weight_active" : ""
          // }`}
          value={formData.height}
          onChange={(event) =>
            setFormData({ ...formData, height: event.target.value })
          }
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

export default Height;
