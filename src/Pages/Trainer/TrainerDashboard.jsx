import React from "react";
import AppLayout from "../../Components/Trainer/Layout";
import "./trainerdashboard.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";

const TrainerDashboard = () => {
  return (
    <div className="trainer_dashboard_container_outer">
      <AppLayout>
        <div className="trainer_dashboard_container_header">
          <div className="trainer_dashboard_container_header_left">
            <h1>Dashboard</h1>
            <p>see your account information in here!</p>
          </div>
          <div className="trainer_dashboard_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div>
        </div>
        <div className="trainer_dashboard_container_body">
          <div className="trainer_dashboard_container_body_first">
            <div className="trainer_dashboard_container_body_left">
              <p>past dashboard</p>
              <h2>42</h2>
            </div>
            <div className="trainer_dashboard_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
          <div className="trainer_dashboard_container_body_second">
            <div className="trainer_dashboard_container_body_left">
              <p>past dashboard</p>
              <h2>42</h2>
            </div>
            <div className="trainer_dashboard_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
          <div className="trainer_dashboard_container_body_third">
            <div className="trainer_dashboard_container_body_left">
              <p>past dashboard</p>
              <h2>42</h2>
            </div>
            <div className="trainer_dashboard_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
        </div>
        <div className="trainer_dashboard_container_footer">
          <div className="trainer_dashboard_container_footer_left">
            <div className="trainer_dashboard_container_footer_left_first">
              <h3>
                Your top post of the <span>week</span>
              </h3>
            </div>
            <div className="trainer_dashboard_container_footer_left_second">
              <p>Total Engagements - 23K</p>
              <p>Likes Count - 29K</p>
              <p> Comments Count - 23K</p>
            </div>
            <div className="trainer_dashboard_container_footer_left_third">
              <button>Highlight Post</button>
              <button>Edit Post</button>
            </div>
          </div>
          <div className="trainer_dashboard_container_footer_right">
            <img src={tempImg}></img>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default TrainerDashboard;
