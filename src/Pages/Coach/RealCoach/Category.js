import React, { useEffect, useState } from "react";
// import "./trackHealth.css";
import axios from "axios";

const Category = ({ formData, setFormData }) => {
  const [category, setCategory] = useState([]);
  const [value, setValue] = useState("");

  const getAllCategory = async () => {
    try {
      const res = await axios.get(
        `https://fit4sure.onrender.com/admin/category/all`
      );

      //   if (res.data.success) {
      console.log(res?.data?.category);
      setCategory(res?.data?.category);
      //   }
    } catch (error) {
      console.log(`error in createCrategory ${error}`);
    }
  };
  useEffect(() => {
    getAllCategory();
  }, []);

  //   const handleDivClick = (div) => {
  //     setSelectedDiv(div);
  //     setFormData({ ...formData, gender: selectedDiv });
  //   };

  return (
    <div className="gender_container">
      <select
        className="form-select mb-3"
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      >
        <option>Choose category</option>
        {category.map((cat) => (
          <option key={cat._id} value={cat.name}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
