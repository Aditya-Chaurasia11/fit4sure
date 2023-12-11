import React from "react";
import startNow from "../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import "./MeetExperts.css";
import { useState } from "react";
import Card from "../Components/Card";
import { Link } from "react-router-dom";

const MeetExperts = () => {
  const [selectedTab, setSelectedTab] = useState("health");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div className="meetexperts_container">
        <div className="meetexperts_container_upper">
          <div className="meetexperts_container_upper_left">
            <div className="meetexperts_container_upper_left_upper">
              <h1 className="meetexperts_container_upper_left_upper_h1">
                Guidance
              </h1>
              <p className="meetexperts_container_upper_left_upper_p">
                from the best health coaches in India
              </p>
            </div>
            <button>Talk to us</button>
          </div>
          <div className="meetexperts_container_upper_right">
            <div className="meetexperts_container_upper_right_left">
              <img src={startNow}></img>
              <div className="meetexperts_div_full">
                <h1>Shobhit Guptabro</h1>
                <p>Assistant Manager</p>
              </div>
              <div className="meetexperts_div_empty"></div>
            </div>
            <div className="meetexperts_container_upper_right_right">
              <div className="meetexperts_div_empty"></div>
              <img src={startNow}></img>
              <div className="meetexperts_div_full">
                <h1>Shobhit Guptabro</h1>
                <p>Assistant Manager</p>
              </div>
            </div>
            <div className="meetexperts_container_upper_right_right"></div>
          </div>
        </div>

        <div className="meetexperts_container_lower">
          <h2>Meet our team</h2>

          <div className="navbar_contianer_nav">
            <div className="meetexperts_container_lower_nav">
              <div
                className={
                  selectedTab === "health"
                    ? "meet_active meetexperts_sel_div"
                    : "meetexperts_sel_div"
                }
                onClick={() => handleTabClick("health")}
              >
                Health Experts
              </div>
              <div
                className={
                  selectedTab === "wellness"
                    ? "meet_active meetexperts_sel_div"
                    : "meetexperts_sel_div"
                }
                onClick={() => handleTabClick("wellness")}
              >
                Wellness Team
              </div>
              <div
                className={
                  selectedTab === "managers"
                    ? "meet_active meetexperts_sel_div"
                    : " meetexperts_sel_div"
                }
                onClick={() => handleTabClick("managers")}
              >
                Managers
              </div>
              {/* Add more tabs as needed */}
            </div>

            {/* Render content based on selectedTab */}
            <div className="meetexperts_content">
              {selectedTab === "health" && (
                <div className="health_comp">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}
              {selectedTab === "wellness" && (
                <div className="health_comp">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />

                  <Card />
                </div>
              )}
              {selectedTab === "managers" && (
                <div className="health_comp">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>
              )}
              {/* Add content for additional tabs */}
            </div>
          </div>
        </div>

        <div className="meetexperts_bottom_button">
          <Link to="/contact">
            <button>Talk to us</button>
          </Link>
          <Link to="/plans">
            <button>Plans</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MeetExperts;
