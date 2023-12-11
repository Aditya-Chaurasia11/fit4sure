import React, { useEffect, useState } from "react";
// import "./trackHealth.css";


const Language = ({ formData, setFormData }) => {
  return (
    <div className="gender_container">
      <select
        className="form-select mb-3"
        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
        required
      >
        <option>Choose category</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
        <option value="Bhojpuri">"Bhojpuri"</option>
      </select>
    </div>
  );
};

export default Language;
