import React from "react";
import "./coach5.css";
import { Link } from "react-router-dom";

const CoachFive = () => {
  return (
    <div className="coach5_container">
      <div className="coach5_container_upper">
        <div className="coach5_container_upper_left">
          <h1>Select your diet</h1>
          <p>Find the right coach for you by answering few questions</p>
        </div>
        <div className="coach5_container_upper_right">Step 1/6</div>
      </div>
      <div className="coach5_container_middle">
        <h1>Select your diet</h1>
        <div className="coach5_container_middle_middle">
          <div className="coach5_container_middle_middle_male">
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1667 5.66665V28.3333H5.83341V5.66665H29.1667ZM32.0834 2.83331H2.91675V31.1666H32.0834V2.83331ZM17.5001 8.49998C12.673 8.49998 8.75008 12.3108 8.75008 17C8.75008 21.6891 12.673 25.5 17.5001 25.5C22.3272 25.5 26.2501 21.6891 26.2501 17C26.2501 12.3108 22.3272 8.49998 17.5001 8.49998Z"
                fill="#28A02D"
              />
            </svg>

            <p>Veg</p>
          </div>

          <div className="coach5_container_middle_middle_female">
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.1667 5.66665V28.3333H5.83341V5.66665H29.1667ZM32.0834 2.83331H2.91675V31.1666H32.0834V2.83331ZM17.5001 8.49998C12.673 8.49998 8.75008 12.3108 8.75008 17C8.75008 21.6891 12.673 25.5 17.5001 25.5C22.3272 25.5 26.2501 21.6891 26.2501 17C26.2501 12.3108 22.3272 8.49998 17.5001 8.49998Z"
                fill="#A03E28"
              />
            </svg>

            <p>Non Veg</p>
          </div>

          <div className="coach5_container_middle_middle_other">
            <svg
              width="35"
              height="34"
              viewBox="0 0 35 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.83342 5.66665V28.3333H29.1667L32.0834 31.1666H2.91675V2.83331L5.83342 5.66665ZM11.3149 10.9915C12.899 9.45269 15.0865 8.49998 17.5001 8.49998C19.9136 8.49998 15.916 15.4611 17.5001 17L11.3149 10.9915ZM23.6852 23.0084L11.3149 10.9915C9.73081 12.5304 8.75008 14.6554 8.75008 17C8.75008 21.6891 12.673 25.5 17.5001 25.5C19.9136 25.5 22.1011 24.5473 23.6852 23.0084ZM23.6852 23.0084C25.2694 21.4696 26.2501 19.3446 26.2501 17C26.2501 14.6554 19.0842 18.5388 17.5001 17L23.6852 23.0084Z"
                fill="#28A02D"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M29.1654 28.3334V5.66675H5.83203L2.91536 2.83341H32.082V31.1667L29.1654 28.3334ZM23.6839 23.0085C22.0997 24.5474 23.0048 20.0043 20.5913 20.0043C18.1777 20.0043 19.0828 18.5389 17.4987 17.0001L23.6839 23.0085ZM11.3135 10.9916L23.6839 23.0085C25.268 21.4697 26.2487 19.3447 26.2487 17.0001C26.2487 12.3109 22.3258 8.50008 17.4987 8.50008C15.0852 8.50008 12.8977 9.45279 11.3135 10.9916ZM11.3135 10.9916C9.72943 12.5305 14 11.2568 14 13.6013C14 15.9459 15.9146 15.4612 17.4987 17.0001L11.3135 10.9916Z"
                fill="#A03E28"
              />
            </svg>

            <p>Veg + Eggs</p>
          </div>
        </div>
        <div className="coach5_container_middle_button">
          <button className="first"> - Exit</button>
          <Link to="/coach/6">
            <button className="second">Next -></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoachFive;
