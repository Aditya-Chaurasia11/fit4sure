import React, { useEffect, useState } from "react";
import axios from "axios";
import "./result.css";
import { Link } from "react-router-dom";

const Result = ({ formData, setFormData }) => {
  const [BMI, setBMI] = useState("31");
  const [BFPdata, setBFP] = useState("31");
  const [BMRdata, setBMR] = useState("31");
  const [IBWdata, setIBW] = useState("31");
  const [WHRdata, setWHR] = useState("31");
  const [ABSIdata, setABSI] = useState("31");

  const options = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bmi",
    params: {
      weight: formData.weight,
      height: formData.height,
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  const BMR = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bmr",
    params: {
      weight: "67",
      height: "172",
      age: "36",
      gender: "male",
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  const IBW = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/ibw",
    params: {
      weight: "67",
      height: "168",
      gender: "female",
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  const WHR = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/whr",
    params: {
      waist: "50",
      hip: "77",
      gender: "female",
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  const ABSI = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/absi",
    params: {
      weight: "71",
      height: "163",
      waist: "87",
      age: "46",
      gender: "female",
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  const BFP = {
    method: "GET",
    url: "https://mega-fitness-calculator1.p.rapidapi.com/bfp",
    params: {
      weight: formData.weight,
      height: formData.height,
      age: formData.age,
      gender: formData.gender,
    },
    headers: {
      "X-RapidAPI-Key": "82063b6c25mshfa3113b1c82b677p18ca7ejsnf93e5056bccd",
      "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getBMI = async () => {
      try {
        const response1 = await axios.request(options);
        const response2 = await axios.request(BFP);
        const response3 = await axios.request(BMR);
        const response4 = await axios.request(IBW);
        const response5 = await axios.request(WHR);
        const response6 = await axios.request(ABSI);

        console.log(response1?.data);
        console.log(response2?.data);
        console.log(response3?.data);
        console.log(response4?.data);
        console.log(response5?.data);
        console.log(response6?.data);

        setBMI(response1?.data.info.bmi);
        setBFP(response2?.data.info.bfp);
        setBMR(response3?.data.info.bmr);
        setIBW(response4?.data.info.robinson);
        setWHR(response5?.data.info.whr);
        setABSI(response6?.data.info.absi);
      } catch (error) {
        console.error(error);
      }
    };
    getBMI();
  });
  return (
    <div className="result_container_outer">
      <div className="result_container_header">
        <Link to="/contact">
          <button >Talk to us</button>
        </Link>
        <h2>Your health report</h2>
        <Link to="/plans">
          <button>Worried? View Plans</button>
        </Link>
      </div>
      <div className="result_container_div">
        <div className="result_container_div_div">
          <p> Body Mass Index </p>
          <div className="result_container_div_div_div">
            {parseFloat(BMI).toFixed(2)}
          </div>
        </div>
        <div className="result_container_div_div">
          <p> Body Fat Percentage</p>
          <div className="result_container_div_div_div">
            {parseFloat(BFPdata).toFixed(2)}
          </div>
        </div>
        <div className="result_container_div_div">
          <p>Basal Metabolic Rate</p>
          <div className="result_container_div_div_div">
            {parseFloat(BMRdata).toFixed(2)}
          </div>
        </div>
        <div className="result_container_div_div">
          <p> Ideal Body Weight</p>
          <div className="result_container_div_div_div">
            {parseFloat(IBWdata).toFixed(2)}
          </div>
        </div>
        <div className="result_container_div_div">
          <p>Waist-Hip ratio </p>
          <div className="result_container_div_div_div">
            {parseFloat(WHRdata).toFixed(2)}
          </div>
        </div>
        <div className="result_container_div_div">
          <p>A Body Shape Index</p>
          <div className="result_container_div_div_div">
            {parseFloat(ABSIdata).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
