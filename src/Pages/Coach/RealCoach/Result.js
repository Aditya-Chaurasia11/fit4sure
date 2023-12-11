import React, { useEffect, useState } from "react";
import axios from "axios";
import "./result.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Result = ({ formData, setFormData }) => {
  const token = localStorage.getItem("token");
  const [trainerList, setTrainerList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Our team will get back to you at your booked slot");
  };

  // Create an Axios instance with the common headers
  const axiosInstance = axios.create({
    baseURL: `https://fit4sure.onrender.com`, // Replace with your API base URL
    withCredentials: true, // Enable cookies for cross-origin requests
  });

  // Set the token as a cookie in the Axios instance
  axiosInstance.defaults.headers.common["Cookie"] = `token=${token}`;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const getTrainer = async () => {
    try {
      const res = await axios.post(
        "https://fit4sure.onrender.com/app/findTrainer",
        formData,
        { headers }
      );
      console.log(res.data.data);
      setTrainerList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrainer();
  });
  return (
    <div className="trainer_result_container">
      <div className="trainer_result_container_header">
        <div className="trainer_result_container_header_left">
          <h2>Book your appointment now</h2>
          <p>We think these coaches may be best for you.</p>
        </div>
        <div className="trainer_result_container_header_right">
          <Link to="/">
            <button>Go back to home</button>
          </Link>
        </div>
      </div>
      <div className="trainer_result_container_body">
        {/* {trainerList.map((k) => (
          <div className="trainer_result_container_body_div">
            <img src={k.image}></img>
            <div className="trainer_result_container_body_detail">
              <h4>{k.name}</h4>
              <div>
                <p>{k.about}</p>
              </div>
            </div>
          </div>
        ))} */}

        <div className="big_changes_container_right">
          <div className="div_big_changes">
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className="div_big_changes">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="div_big_changes">
            <label>Contact no</label>
            <input type="phone"></input>
          </div>
          {/* <div className="big_changes_temp"> */}
          <div className="select_comp_home_big div_big_changes">
            <label>Gender</label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="div_big_changes">
            <label> Age</label>
            <input type="number"></input>
          </div>
          {/* </div> */}
          {/* <div className="big_changes_temp"> */}
          <div className="div_big_changes">
            <label>Preferred Time Slot</label>
            <input type="number"></input>
          </div>
          <div className="select_comp_home_big div_big_changes">
            <label>Country</label>
            <select>
              <option>India</option>
              <option>Japan</option>
            </select>
          </div>
          {/* </div> */}

          <div className="button_comp">
            <button onClick={handleSubmit}>Book slot</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Result;
