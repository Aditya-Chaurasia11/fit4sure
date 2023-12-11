import React, { useEffect, useState } from "react";
import AppLayout from "../../Components/Trainer/Layout";
import "./trainerhome.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";
import axios from "axios";

const TrainerHome = () => {
  const phone = "+919696660547";

  const fetchData = async () => {
    try {
      const response = await axios({
        method: 'GET',
        url: `https://fit4sure.onrender.com/admin/trainer/gettrainer`,
        data: {
          phone: phone,
        },
      });
      console.log("Response:", response.data);
      // Handle the response data here
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors here
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="trainer_home_container_outer">
      <AppLayout>
        <div className="trainer_home_container_header">
          <div className="trainer_home_container_header_left">
            <h1>Profile</h1>
            <p>see your personal information in here!</p>
          </div>
          <div className="trainer_home_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div>
        </div>
        <div className="trainer_home_container_body">
          <div className="trainer_home_container_body_left">
            <h1>
              Ramesh <span>Singh</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining. Lorem Ipsum.
            </p>
            <div className="trainer_home_container_body_left_button">
              <button>View Earnings</button>
              <button>Boost Profile</button>
            </div>
          </div>
          <div className="trainer_home_container_body_right">
            <img src={tempImg}></img>
          </div>
        </div>

        <CarouselSlider>
          <CardForSlider number="1" />
          <CardForSlider number="2" />
          <CardForSlider number="3" />
          <CardForSlider number="4" />

          {/* Add more custom components as needed */}
        </CarouselSlider>
      </AppLayout>
    </div>
  );
};

export default TrainerHome;
