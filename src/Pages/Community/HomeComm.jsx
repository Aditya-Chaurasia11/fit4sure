import React, { useState } from "react";
import hearFromCoach from "../../images/Frame 16o.png";
import "./homeComm.css";

const HomeComm = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hoverState) => {
    setIsHovered(hoverState);
  };

  const stopMarquee = () => {
    const marquee = document.querySelector("marquee");
    if (marquee) {
      marquee.stop();
    }
  };

  const startMarquee = () => {
    const marquee = document.querySelector("marquee");
    if (marquee) {
      marquee.start();
    }
  };

  return (
    <div className="homecomm_container">
      <div className="homecomm_container_left_container">
        <div className="homecomm_container_left_container_upper">
          <input type="text" placeholder="Search"></input>
          <select>
            <option>All</option>
          </select>
        </div>
        <div className="homecomm_container_left_container_body">
          <img src={hearFromCoach}></img>
          <p>post of the week</p>
        </div>
      </div>

      <div
        className="homecomm_container_right_container"
        onMouseEnter={() => {
          handleHover(true);
          stopMarquee();
        }}
        onMouseLeave={() => {
          handleHover(false);
          startMarquee();
        }}
      >
        <marquee
          direction="up"
          scrollamount="10"
          className=""
          BEHAVIOR="alternate"
        >
          <div className="homecomm_container_right_container_div">
            <img src={hearFromCoach}></img>
            <div className="homecomm_container_right_container_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essential.
              <div className="homecomm_container_right_container_lower">
                <button>John Cena</button>
                <h3>X</h3>
              </div>
            </div>
          </div>

          <div className="homecomm_container_right_container_div">
            <img src={hearFromCoach}></img>
            <div className="homecomm_container_right_container_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essential.
              <div className="homecomm_container_right_container_lower">
                <button>John Cena</button>
                <h3>X</h3>
              </div>
            </div>
          </div>

          <div className="homecomm_container_right_container_div">
            <img src={hearFromCoach}></img>
            <div className="homecomm_container_right_container_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essential.
              <div className="homecomm_container_right_container_lower">
                <button>John Cena</button>
                <h3>X</h3>
              </div>
            </div>
          </div>

          <div className="homecomm_container_right_container_div">
            <img src={hearFromCoach}></img>
            <div className="homecomm_container_right_container_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essential.
              <div className="homecomm_container_right_container_lower">
                <button>John Cena</button>
                <h3>X</h3>
              </div>
            </div>
          </div>

          <div className="homecomm_container_right_container_div">
            <img src={hearFromCoach}></img>
            <div className="homecomm_container_right_container_body">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essential.
              <div className="homecomm_container_right_container_lower">
                <button>John Cena</button>
                <h3>X</h3>
              </div>
            </div>
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default HomeComm;
