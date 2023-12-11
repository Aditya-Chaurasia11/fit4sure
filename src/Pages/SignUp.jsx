import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import mainImg from "../images/young-woman-stretching-before-workout 3.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOTP, setISOTP] = useState(false);

  const handleSubmitSignup = async () => {
    const data = {
      firstName: first,
      lastName: last,
      email: email,
      contactNumber: phone,
    };
    const phoneNum = {
      contactNumber: phone,
    };
    console.log(data);
    console.log(phoneNum);
    try {
      const res = await axios.post(
        `https://fit4sure.onrender.com/app/user/signup`,
        data
      );

      console.log(res.message);
    } catch (error) {
      // console.log("error", );
      alert(error.response.data.message);
    }
    console.log(data);
  };

  // const handleLogin = async () => {
  //   const data = {
  //     firstName: first,
  //     lastName: last,
  //     email: email,
  //     contactNumber: phone,
  //   };
  //   try {
  //     const res = await axios.post(
  //       `https://fit4sure.onrender.com/app/user/sendOTP`,
  //       data
  //     );
  //     console.log(res.data);
  //     console.log(otp);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleOTP = async () => {
    const phoneNum = {
      phone: phone,
    };
    try {
      const res = await axios.post(
        `https://fit4sure.onrender.com/app/user/genOTP`,
        phoneNum
      );
      console.log(res.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOTP = async () => {
    const data = {
      phone: phone,
      otp: otp,
    };
    try {
      const res = await axios.post(
        `https://fit4sure.onrender.com/app/user/verifyOTP`,
        data
      );
      console.log(res.data.success);
      setISOTP(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup_upper_container">
      <div className="signup_container">
        <div className="signup_container_card">
          <h1>
            Let's <span>begin</span>
          </h1>

          {isOTP ? (
            <div>
              <div className="signup_container_card_input">
                <label>First name</label>
                <input
                  type="text"
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                ></input>
                <label>Last name</label>
                <input
                  type="text"
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                ></input>
                <label>Email Id</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              {/* <div> */}
              <div className="signup_container_button">
                <button className="first_button" onClick={handleSubmitSignup}>
                  Sign In
                </button>
              </div>
            </div>
          ) : (
            <div className="signup_container_otp">
              <label>Phone</label>
              <input
                type="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <label>One-Time Password (OTP)</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              ></input>
              <div className="signup_container_button">
                <button className="first_button" onClick={handleOTP}>
                  Send OTP
                </button>
                <button className="second_button" onClick={handleVerifyOTP}>
                  Verify OTP
                </button>
              </div>
            </div>
          )}

          {/* </div> */}
          <p className="signup_link">
            Don't have account? <Link to="/signin"> Sign up</Link>
          </p>
        </div>
      </div>
      <img className="home_container_main_img" src={mainImg}></img>
      <div className="home_container_svg">
        <svg
          height="403"
          viewBox="0 0 1512 403"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M534.275 288.714C295.762 231.667 63.5286 328.072 -15.9404 395.504L9.49958 657L633 770L1556 657L1516.95 395.223L1517 171.713C1488.02 161.532 1439.72 92.2469 1265.52 90.025C1084.79 87.7199 1013.79 206.903 948.714 247.349C869.679 296.468 832.415 360.023 534.275 288.714Z"
            stroke="#E6F4FA"
            stroke-width="6"
          />
          <path
            d="M534.275 268.714C295.762 211.667 63.5287 308.072 -15.9402 375.504L-15.9402 660L761.5 745.5L1535 635.5L1516.95 375.223L1517 151.713C1488.02 141.532 1439.72 72.2468 1265.52 70.0249C1084.79 67.7198 1013.79 186.903 948.714 227.349C869.679 276.468 832.415 340.023 534.275 268.714Z"
            stroke="#E6F4FA"
            stroke-width="6"
          />
          <path
            d="M534.274 248.714C295.762 191.667 63.5285 288.072 -15.9404 355.504L-3.00041 620.5L746 608L1617.5 706L1516.95 355.223L1517 131.713C1488.02 121.532 1439.72 52.2467 1265.52 50.0248C1084.79 47.7197 1013.79 166.903 948.714 207.349C869.679 256.468 832.415 320.023 534.274 248.714Z"
            stroke="#E6F4FA"
            stroke-width="6"
          />
          <path
            d="M534.275 228.714C295.763 171.667 63.5289 268.072 -15.94 335.504L-85.4999 620.5L740 669L1605 648L1516.95 335.223L1517 111.713C1488.02 101.532 1439.72 32.2468 1265.52 30.0249C1084.79 27.7197 1013.79 146.903 948.714 187.349C869.68 236.468 832.415 300.023 534.275 228.714Z"
            stroke="#E6F4FA"
            stroke-width="6"
          />
          <path
            d="M534.275 303.714C295.763 246.667 63.5289 343.072 -15.94 410.504L1516.95 410.223L1517 186.713C1488.02 176.532 1439.72 107.247 1265.52 105.025C1084.79 102.72 1013.79 221.903 948.714 262.349C869.68 311.468 832.415 375.023 534.275 303.714Z"
            fill="#E6F4FA"
          />
          <path
            d="M1291 153V247.828C1291 317.131 1313.63 386.721 1370.21 426.748C1408.04 453.516 1454.94 477.938 1505.5 486.5"
            stroke="#D6E7EF"
            stroke-width="8"
          />
          <path
            opacity="0.8"
            d="M1317 163V257.828C1317 327.131 1339.63 396.721 1396.21 436.748C1434.04 463.516 1480.94 487.938 1531.5 496.5"
            stroke="#D6E7EF"
            stroke-width="8"
          />
          <path
            opacity="0.8"
            d="M1338 163V257.828C1338 327.131 1360.63 396.721 1417.21 436.748C1455.04 463.516 1501.94 487.938 1552.5 496.5"
            stroke="#D6E7EF"
            stroke-width="8"
          />
        </svg>
      </div>
    </div>
  );
};

export default Signup;
