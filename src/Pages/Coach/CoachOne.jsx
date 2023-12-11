import React from "react";
import "./coach.css";
import { Link } from "react-router-dom";

const CoachOne = () => {
  return (
    <div className="coach_container">
      <div className="coach_container_upper">
        <div className="coach_container_upper_left">
          <h1>Find your coach</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach_container_upper_right">Step 1/6</div>
      </div>
      <div className="coach_container_middle">
        <h1>Select your gender</h1>
        <div className="coach_container_middle_middle">
          <div className="coach_container_middle_middle_male">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 10C12.15 10 14.1667 10.6833 15.7833 11.85L24.3 3.33333H16.6667V0H30V13.3333H26.6667V5.68333L18.15 14.1667C19.3167 15.8333 20 17.8333 20 20C20 22.6522 18.9464 25.1957 17.0711 27.0711C15.1957 28.9464 12.6522 30 10 30C7.34784 30 4.8043 28.9464 2.92893 27.0711C1.05357 25.1957 0 22.6522 0 20C0 17.3478 1.05357 14.8043 2.92893 12.9289C4.8043 11.0536 7.34784 10 10 10ZM10 13.3333C8.23189 13.3333 6.5362 14.0357 5.28595 15.286C4.03571 16.5362 3.33333 18.2319 3.33333 20C3.33333 21.7681 4.03571 23.4638 5.28595 24.714C6.5362 25.9643 8.23189 26.6667 10 26.6667C11.7681 26.6667 13.4638 25.9643 14.714 24.714C15.9643 23.4638 16.6667 21.7681 16.6667 20C16.6667 18.2319 15.9643 16.5362 14.714 15.286C13.4638 14.0357 11.7681 13.3333 10 13.3333Z"
                fill="#0080A8"
              />
            </svg>
            <p>Male</p>
          </div>

          <div className="coach_container_middle_middle_female">
            <svg
              width="20"
              height="31"
              viewBox="0 0 20 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.666626C12.6522 0.666626 15.1957 1.72019 17.0711 3.59556C18.9464 5.47092 20 8.01446 20 10.6666C20 15.6166 16.4 19.7333 11.6667 20.5333V24H15V27.3333H11.6667V30.6666H8.33333V27.3333H5V24H8.33333V20.5333C3.6 19.7333 0 15.6166 0 10.6666C0 8.01446 1.05357 5.47092 2.92893 3.59556C4.8043 1.72019 7.34784 0.666626 10 0.666626ZM10 3.99996C8.23189 3.99996 6.5362 4.70234 5.28595 5.95258C4.03571 7.20282 3.33333 8.89852 3.33333 10.6666C3.33333 12.4347 4.03571 14.1304 5.28595 15.3807C6.5362 16.6309 8.23189 17.3333 10 17.3333C11.7681 17.3333 13.4638 16.6309 14.714 15.3807C15.9643 14.1304 16.6667 12.4347 16.6667 10.6666C16.6667 8.89852 15.9643 7.20282 14.714 5.95258C13.4638 4.70234 11.7681 3.99996 10 3.99996Z"
                fill="#D80EB7"
              />
            </svg>
            <p>Female</p>
          </div>

          <div className="coach_container_middle_middle_other">
            <svg
              width="25"
              height="36"
              viewBox="0 0 25 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3 3.66671H13.3333V0.333374H25V12H21.6667V6.01671L15.2833 12.4C16.15 13.7167 16.6667 15.3334 16.6667 17C16.6667 21.0334 13.8 24.4 10 25.1667V28.6667H13.3333V32H10V35.3334H6.66667V32H3.33333V28.6667H6.66667V25.1667C2.86667 24.4 0 21.0334 0 17C0 14.7899 0.877974 12.6703 2.44078 11.1075C4.00358 9.54468 6.1232 8.66671 8.33333 8.66671C10 8.66671 11.6 9.16671 12.9167 10.05L19.3 3.66671ZM8.33333 12C7.00725 12 5.73548 12.5268 4.7978 13.4645C3.86012 14.4022 3.33333 15.674 3.33333 17C3.33333 18.3261 3.86012 19.5979 4.7978 20.5356C5.73548 21.4733 7.00725 22 8.33333 22C9.65942 22 10.9312 21.4733 11.8689 20.5356C12.8065 19.5979 13.3333 18.3261 13.3333 17C13.3333 15.674 12.8065 14.4022 11.8689 13.4645C10.9312 12.5268 9.65942 12 8.33333 12Z"
                fill="#5B5B5B"
              />
            </svg>
            <p>Other</p>
          </div>
        </div>
        <div className="coach_container_middle_button">
          <button className="first"> - Exit</button>
          <Link to="/coach/2">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachOne;
