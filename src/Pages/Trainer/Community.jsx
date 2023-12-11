import React from "react";
import AppLayout from "../../Components/Trainer/Layout";
import "./trainercommunity.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";

const Community = () => {
  return (
    <div className="trainer_community_container_outer">
      <AppLayout>
        <div className="trainer_community_container_header">
          <div className="trainer_community_container_header_left">
            <h1>Community</h1>
            <p>see your account information in here!</p>
          </div>
          <div className="trainer_community_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div>
        </div>
        <div className="trainer_community_container_middle">
          <div className="trainer_community_container_middle_left">
            <div className="trainer_community_container_middle_left_div">
              <img src={tempImg}></img>
              <div className="trainer_community_container_middle_left_div_property">
                <p>Likes - 28K</p>
                <p>Enagement - 98K</p>
                <p>Comments - 58</p>
              </div>
            </div>

            <div className="trainer_community_container_middle_left_div">
              <img src={tempImg}></img>
              <div className="trainer_community_container_middle_left_div_property">
                <p>Likes - 28K</p>
                <p>Enagement - 98K</p>
                <p>Comments - 58</p>
              </div>
            </div>


            <div className="trainer_community_container_middle_left_div">
              <img src={tempImg}></img>
              <div className="trainer_community_container_middle_left_div_property">
                <p>Likes - 28K</p>
                <p>Enagement - 98K</p>
                <p>Comments - 58</p>
              </div>
            </div>


            <div className="trainer_community_container_middle_left_div">
              <img src={tempImg}></img>
              <div className="trainer_community_container_middle_left_div_property">
                <p>Likes - 28K</p>
                <p>Enagement - 98K</p>
                <p>Comments - 58</p>
              </div>
            </div>
            
          </div>
          <div className="trainer_community_container_middle_right">
            <div className="trainer_community_container_middle_right_div">
              <div className="trainer_community_container_middle_right_div_left">
                <p>all followers</p>
                <h3>25K</h3>
              </div>

              <div className="trainer_community_container_middle_right_div_right">
                <p>all followers</p>
                <h3>25K</h3>
              </div>
            </div>

            <div className="trainer_community_container_middle_right_div">
              <div className="trainer_community_container_middle_right_div_left">
                <p>all followers</p>
                <h3>25K</h3>
              </div>

              <div className="trainer_community_container_middle_right_div_right">
                <p>all followers</p>
                <h3>25K</h3>
              </div>
            </div>


            <div className="trainer_community_container_middle_right_div">
              <div className="trainer_community_container_middle_right_div_left">
                <p>all followers</p>
                <h3>25K</h3>
              </div>

              <div className="trainer_community_container_middle_right_div_right">
                <p>all followers</p>
                <h3>25K</h3>
              </div>
            </div>


            <div className="trainer_community_container_middle_right_div">
              <div className="trainer_community_container_middle_right_div_left">
                <p>all followers</p>
                <h3>25K</h3>
              </div>

              <div className="trainer_community_container_middle_right_div_right">
                <p>all followers</p>
                <h3>25K</h3>
              </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Community;
