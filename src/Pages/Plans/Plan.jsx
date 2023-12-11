import React from "react";
import Tab from "../../Components/TabComp/Tab";
import "./plan.css";
import { Link } from "react-router-dom";

const Plan = () => {
  return (
    <div className="plan_container">
      <div className="plan_container_tab">
        <h1>
          Choose your favorite <span>plan</span>
        </h1>
        <div>
          <Tab />
        </div>
        <div className="plan_container_button">
          <Link to="/contact">
            <button>Talk to us</button>
          </Link>
          <Link>
            <button>Purchse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
