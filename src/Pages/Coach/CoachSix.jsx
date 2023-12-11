import React, { useState } from "react";
import "./coach6.css";
import { Link } from "react-router-dom";

const CoachSix = () => {
  const [selectedDiseases, setSelectedDiseases] = useState([]);

  const toggleDiseaseSelection = (disease) => {
    if (selectedDiseases.includes(disease)) {
      setSelectedDiseases(selectedDiseases.filter((item) => item !== disease));
    } else {
      setSelectedDiseases([...selectedDiseases, disease]);
    }
  };

  const diseases = ["Diabetes", "Fever", "Cancer", "Asthma", "Hypertension"];
  const diseaseDivs = diseases.map((disease, index) => (
    <div
      key={index}
      onClick={() => toggleDiseaseSelection(disease)}
      className={`disease ${
        selectedDiseases.includes(disease) ? "selected" : ""
      }`}
    >
      {disease}
    </div>
  ));
  return (
    <div className="coach4_container">
      <div className="coach4_container_upper">
        <div className="coach4_container_upper_left">
          <h1>Find your coach</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach4_container_upper_right">Step 6/6</div>
      </div>
      <div className="coach4_container_middle">
        <h1>Select your target height</h1>
        <div className="coach4_container_middle_middle">{diseaseDivs}</div>
        <div className="coach4_container_middle_button">
          <button className="first">Exit -></button>
          <Link to="/">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachSix;
