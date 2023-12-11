import React, { useState } from "react";
import "./trackHealth.css";

const Age = ({ formData, setFormData }) => {
  const [selectedOption, setSelectedOption] = useState("kg");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const [count, setCount] = useState(70);

  const increment = () => {
    setCount(count + 1);
    setFormData({ ...formData, age: count + 1 });
  };

  const decrement = () => {
    setCount(count - 1);
    setFormData({ ...formData, age: count - 1 });
  };
  return (
    <div className="age_container_middle_middle">
      <div className="age_container_middle_middle_first">
        <span className="material-symbols-outlined" onClick={decrement}>
          remove
        </span>
        <p className="age_container_middle_middle_first_p">{count}</p>
        <span className="material-symbols-outlined" onClick={increment}>
          add
        </span>
      </div>
    </div>
  );
};

export default Age;
