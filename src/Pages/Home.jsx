import React from "react";
import "./home.css";
import mainImg from "../images/young-woman-stretching-before-workout 3.png";
import secImg from "../images/Frame 12.png";
import selPlan from "../images/front-view-man-tank-top-holding-weights-with-copy-space.jpg";
import hearFromCoach from "../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
const Home = () => {
  return (
    <div>
      <div className="home_container_upperSection">
        <div className="home_container">
          <h1>Your fitness |</h1>
          <p className="home_container_subHeading">is your greatest asset</p>
          <p className="home_container_label">
            We make you do the exercise you like, provide constant growth amend
            your mindset to live.
          </p>
          <button className="home_container_button">Download App</button>
        </div>
        <img className="home_container_main_img" src={mainImg}></img>
        <div className="home_container_svg">
          <svg
            height="403"
            viewBox="0 0 1512 403"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M534.275 288.714C295.762 231.667 63.5286 328.072 -15.9404 395.504L9.49958 657L633 770L1556 657L1516.95 395.223L1517 171.713C1488.02 161.532 1439.72 92.2469 1265.52 90.025C1084.79 87.7199 1013.79 206.903 948.714 247.349C869.679 296.468 832.415 360.023 534.275 288.714Z"
              stroke="#E6F4FA"
              stroke-width="6"
            />
            <path
              d="M534.275 268.714C295.762 211.667 63.5287 308.072 -15.9402 375.504L-15.9402 660L761.5 745.5L1535 635.5L1516.95 375.223L1517 151.713C1488.02 141.532 1439.72 72.2468 1265.52 70.0249C1084.79 67.7198 1013.79 186.903 948.714 227.349C869.679 276.468 832.415 340.023 534.275 268.714Z"
              stroke="#E6F4FA"
              stroke-width="6"
            />
            <path
              d="M534.274 248.714C295.762 191.667 63.5285 288.072 -15.9404 355.504L-3.00041 620.5L746 608L1617.5 706L1516.95 355.223L1517 131.713C1488.02 121.532 1439.72 52.2467 1265.52 50.0248C1084.79 47.7197 1013.79 166.903 948.714 207.349C869.679 256.468 832.415 320.023 534.274 248.714Z"
              stroke="#E6F4FA"
              stroke-width="6"
            />
            <path
              d="M534.275 228.714C295.763 171.667 63.5289 268.072 -15.94 335.504L-85.4999 620.5L740 669L1605 648L1516.95 335.223L1517 111.713C1488.02 101.532 1439.72 32.2468 1265.52 30.0249C1084.79 27.7197 1013.79 146.903 948.714 187.349C869.68 236.468 832.415 300.023 534.275 228.714Z"
              stroke="#E6F4FA"
              stroke-width="6"
            />
            <path
              d="M534.275 303.714C295.763 246.667 63.5289 343.072 -15.94 410.504L1516.95 410.223L1517 186.713C1488.02 176.532 1439.72 107.247 1265.52 105.025C1084.79 102.72 1013.79 221.903 948.714 262.349C869.68 311.468 832.415 375.023 534.275 303.714Z"
              fill="#E6F4FA"
            />
            <path
              d="M1291 153V247.828C1291 317.131 1313.63 386.721 1370.21 426.748C1408.04 453.516 1454.94 477.938 1505.5 486.5"
              stroke="#D6E7EF"
              stroke-width="8"
            />
            <path
              opacity="0.8"
              d="M1317 163V257.828C1317 327.131 1339.63 396.721 1396.21 436.748C1434.04 463.516 1480.94 487.938 1531.5 496.5"
              stroke="#D6E7EF"
              stroke-width="8"
            />
            <path
              opacity="0.8"
              d="M1338 163V257.828C1338 327.131 1360.63 396.721 1417.21 436.748C1455.04 463.516 1501.94 487.938 1552.5 496.5"
              stroke="#D6E7EF"
              stroke-width="8"
            />
          </svg>
        </div>
      </div>
      {/* <div className="video_comp"> */}
      <img className="video_section" src={secImg}></img>
      {/* </div> */}
      <div className="how_works">
        <div className="how_works_upper">
          <h1>How it works?</h1>
        </div>
        <div className="how_works_middle">
          <div className="how_works_middle_comp">
            <div className="how_works_middle_comp_left">
              <h1>01</h1>
            </div>
            <div className="how_works_middle_comp_right">
              <p className="how_works_middle_comp_right_head">
                Track your health
              </p>
              <hr></hr>

              <p className="how_works_middle_comp_right_body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>

          <div className="how_works_middle_comp">
            <div className="how_works_middle_comp_left">
              <h1>02</h1>
            </div>
            <div className="how_works_middle_comp_right">
              <p className="how_works_middle_comp_right_head">
                Track your health
              </p>
              <hr></hr>

              <p className="how_works_middle_comp_right_body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>

          <div className="how_works_middle_comp">
            <div className="how_works_middle_comp_left">
              <h1>03</h1>
            </div>
            <div className="how_works_middle_comp_right">
              <p className="how_works_middle_comp_right_head">
                Track your health
              </p>
              <hr></hr>

              <p className="how_works_middle_comp_right_body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>

          <div className="how_works_middle_comp">
            <div className="how_works_middle_comp_left">
              <h1>04</h1>
            </div>
            <div className="how_works_middle_comp_right">
              <p className="how_works_middle_comp_right_head">
                Track your health
              </p>
              <hr></hr>

              <p className="how_works_middle_comp_right_body">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
          </div>
        </div>
        <div className="how_works_bottom">
          <button>Sound interestng?</button>
        </div>
      </div>
      <div className="select_plan">
        <img src={selPlan}></img>
        <div className="select_plan_text">
          <div>
            <h1>
              Select your <span>plan</span>
            </h1>
            <p>Starting at just $199</p>
            <ul>
              <li>Monthly subscription </li>
              <li>Cancel anytime</li>
              <li>Risk free 30 days trial</li>
            </ul>
          </div>
          <div className="select_plan_text_button">
            <button>View Plans</button>
          </div>
        </div>
      </div>

      <div>
        <div className="hear_from_coach">
          <div className="moving-div primary">
            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>
          </div>

          <div className="moving-div secondary">
            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hear_from_coach">
          <div className="moving-div primary ">
            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>
          </div>

          <div className="moving-div secondary ">
            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>

            <div className="moving-div_comp">
              <img src={hearFromCoach}></img>
              <div className="moving-div_comp_text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. @Fit4Sure has been great. It has
                  survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essential.
                </p>
                <div className="moving-div_comp_text_button">
                  <button>John Cena</button>
                  <p>X</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
