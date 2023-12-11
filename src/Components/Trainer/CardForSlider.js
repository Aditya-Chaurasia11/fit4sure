import React from "react";
import "./card.css";
const CardForSlider = (props) => {
  return (
    <div className={`card_container_trainer ${props.status}`}>
      <div className="card_header">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.73236 13.13C7.73236 14.2784 8.61369 15.2042 9.70868 15.2042H11.9432C12.8957 15.2042 13.6702 14.3941 13.6702 13.397C13.6702 12.3109 13.1984 11.9281 12.4951 11.6789L8.90747 10.4325C8.20418 10.1833 7.73236 9.80048 7.73236 8.7144C7.73236 7.71734 8.50686 6.90723 9.45941 6.90723H11.6939C12.7889 6.90723 13.6702 7.83307 13.6702 8.98147"
            stroke="url(#paint0_linear_315_269)"
            stroke-width="1.85404"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6952 5.71484V16.3976"
            stroke="url(#paint1_linear_315_269)"
            stroke-width="1.85404"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6952 19.958C15.6118 19.958 19.5975 15.9723 19.5975 11.0556C19.5975 6.13903 15.6118 2.15332 10.6952 2.15332C5.77855 2.15332 1.79285 6.13903 1.79285 11.0556C1.79285 15.9723 5.77855 19.958 10.6952 19.958Z"
            stroke="url(#paint2_linear_315_269)"
            stroke-width="1.85404"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_315_269"
              x1="10.7013"
              y1="6.90723"
              x2="10.7013"
              y2="15.2042"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#172C37" />
              <stop offset="1" stop-color="#2F5062" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_315_269"
              x1="11.1952"
              y1="5.71484"
              x2="11.1952"
              y2="16.3976"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#172C37" />
              <stop offset="1" stop-color="#2F5062" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_315_269"
              x1="10.6952"
              y1="2.15332"
              x2="10.6952"
              y2="19.958"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#172C37" />
              <stop offset="1" stop-color="#2F5062" />
            </linearGradient>
          </defs>
        </svg>
        <p>12.2{props.number}%</p>
      </div>
      <div className="card_bottom">
        124K
        <button>See info</button>
      </div>
    </div>
  );
};

export default CardForSlider;
