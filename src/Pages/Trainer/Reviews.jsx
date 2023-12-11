import React from "react";
import AppLayout from "../../Components/Trainer/Layout";
import "./trainerreview.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";

const Review = () => {
  return (
    <div className="trainer_review_container_outer">
      <AppLayout>
        <div className="trainer_review_container_header">
          <div className="trainer_review_container_header_left">
            <h1>Review</h1>
            <p>see your account information in here!</p>
          </div>
          <div className="trainer_review_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div>
        </div>
        <div className="trainer_review_container_middle">
          <div className="trainer_review_container_middle_header">
            <h3>
              Read reviews by <span>clients</span>
            </h3>
            <button>Read</button>
          </div>
          <div className="trainer_review_container_middle_middle">
            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>


            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>



            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>


            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>



            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>



            <div className="trainer_review_container_middle_middle_div">
            <img src={tempImg}></img>
            <div className="trainer_review_container_middle_middle_left">
              <div className="trainer_review_container_middle_middle_left_upper">
                <button>John Abhrahin</button>
                <p>xxxx</p>
              </div>
              <div className="trainer_review_container_middle_middle_left_lower">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry best man.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default Review;
