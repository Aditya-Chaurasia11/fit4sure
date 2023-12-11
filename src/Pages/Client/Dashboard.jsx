import React, { useEffect, useState } from "react";
import AppLayout from "../../Components/Client/Layout";
import "./dashboard.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";
import axios from "axios";

const Dashboard = () => {
  const phone = "+919696660547";

  const fetchData = async () => {
    try {
      // const response = await axios({
      //   method: "GET",
      //   url: `https://fit4sure.onrender.com/admin/trainer/gettrainer`,
      //   data: {
      //     phone: phone,
      //   },
      // });
      // console.log("Response:", response.data);
      // // Handle the response data here
      const storedToken = localStorage.getItem("token");
      console.log(storedToken);

      if (storedToken) {
        // const decodedToken = atob(storedToken.split(".")[1]); // Assuming token is in format header.payload.signature
        // const { id: clientId } = JSON.parse(decodedToken);
        // console.log("Client ID:", clientId);
        const res = await axios.post(
          `https://fit4surebackend.onrender.com/app/user/get_user_profile`,
          storedToken
        );
        console.log(res.data);
      }

     
      // const res = await axios();
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle errors here
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="client_dashboard_container_outer">
      <AppLayout>
        <div className="client_dashboard_container_header">
          <div className="client_dashboard_container_header_left">
            <h1>Linh Nguyen</h1>
          </div>
          {/* <div className="client_dashboard_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div> */}
        </div>
        <div className="client_dashboard_container_body">
          <div className="client_dashboard_container_body_left">
            {/* <h1>
              Ramesh <span>Singh</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. @Fit4Sure has been great. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining. Lorem Ipsum.
            </p>
            <div className="client_dashboard_container_body_left_button">
              <button>View Earnings</button>
              <button>Boost Profile</button>
            </div> */}

            <p>Mobile No :- +91 78755 36528</p>
            <p>Gender :- Female</p>
            <p>Age :- 23 years</p>
            <p>Weight :- 56 kgs</p>
            <p>Height :- 189 cms</p>
            <p>Diet :- Non-Veg</p>
            <p>Diseases :- Thyroid, Blood Pressure</p>
            <p>Coach :- Pradeep Bhatt</p>
          </div>
          <div className="client_dashboard_container_body_right">
            <img src={tempImg}></img>
          </div>
        </div>

        <CarouselSlider>
          <CardForSlider number="1" status="card_forslideractive" />
          <CardForSlider number="2" status="card_forsliderinactive" />
          <CardForSlider number="3" status="card_forsliderinactive" />
          <CardForSlider number="4" status="card_forsliderinactive" />

          {/* Add more custom components as needed */}
        </CarouselSlider>
      </AppLayout>
    </div>
  );
};

export default Dashboard;
