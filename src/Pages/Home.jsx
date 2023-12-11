import React, { useRef, useState } from "react";
import "./home.css";
import mainImg from "../images/young-woman-stretching-before-workout 3.png";
import secImg from "../images/Frame 12.png";
import selPlan from "../images/front-view-man-tank-top-holding-weights-with-copy-space.jpg";
import hearFromCoach from "../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import trustByThou from "../images/active-female-doing-stretching-exercises-body-outdoors.jpg";
import { CarouselBottom } from "../Components/Carousel";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import video from "../images/video1.mp4";
import startNow from "../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import Carousel from "react-bootstrap/Carousel";
import meet_img from "../images/Ellipse 102.png";
import big_step from "../images/big_change.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// import ExampleCarouselImage from "components/ExampleCarouselImage";

const Home = () => {
  const videoRef = useRef(null); // Create a ref to the video iframe

  const navigate = useNavigate();

  const handleType = (count) => {
    // access word count number
    // console.log(count);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("Our team will get back to you at your booked slot");
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  // const closeVideo=()=>

  return (
    <div>
      <div className="home_container_upperSection">
        <div className="home_container">
          <span>
            {/* Your fitness | */}
            <Typewriter
              words={["Your fitness", "Your fitness"]}
              loop={100}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1000}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </span>
          <p className="home_container_subHeading">is your greatest asset</p>
          <p className="home_container_label">
            We make you do the exercise you like, provide constant growth amend
            your mindset to live.
          </p>
          <div className="home_container_button_container">
            <Link to="/contact">
              <button className="home_container_button">Talk to us</button>
            </Link>

            <Link to="/track">
              <button className="home_container_button_second">
                Track your health->
              </button>
            </Link>

            <button className="home_container_button_third">
              <svg
                width="37"
                height="43"
                viewBox="0 0 37 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.53875 1.26153C1.07842 1.76109 0.812012 2.53886 0.812012 3.54611V39.4739C0.812012 40.4812 1.07842 41.2589 1.53875 41.7585L1.65237 41.8682L21.0727 21.7436V21.2684L1.65237 1.14375L1.53875 1.26153Z"
                  fill="url(#paint0_linear_769_740)"
                />
                <path
                  d="M27.5391 28.4543L21.0729 21.7428V21.2676L27.547 14.556L27.6919 14.6433L35.359 19.1658C37.547 20.4492 37.547 22.5611 35.359 23.8527L27.6919 28.367L27.5391 28.4543Z"
                  fill="url(#paint1_linear_769_740)"
                />
                <path
                  d="M27.6915 28.3673L21.0724 21.5054L1.5385 41.758C2.26524 42.55 3.45036 42.6454 4.79807 41.8534L27.6915 28.3673Z"
                  fill="url(#paint2_linear_769_740)"
                />
                <path
                  d="M27.6915 14.6438L4.79807 1.15763C3.45036 0.373766 2.26524 0.469207 1.5385 1.2612L21.0724 21.5056L27.6915 14.6438Z"
                  fill="url(#paint3_linear_769_740)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_769_740"
                    x1="19.3484"
                    y1="39.8481"
                    x2="-7.89844"
                    y2="13.5654"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00A0FF" />
                    <stop offset="0.0066" stop-color="#00A1FF" />
                    <stop offset="0.2601" stop-color="#00BEFF" />
                    <stop offset="0.5122" stop-color="#00D2FF" />
                    <stop offset="0.7604" stop-color="#00DFFF" />
                    <stop offset="1" stop-color="#00E3FF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_769_740"
                    x1="38.2082"
                    y1="21.5029"
                    x2="0.28916"
                    y2="21.5029"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE000" />
                    <stop offset="0.4087" stop-color="#FFBD00" />
                    <stop offset="0.7754" stop-color="#FFA500" />
                    <stop offset="1" stop-color="#FF9C00" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_769_740"
                    x1="24.0922"
                    y1="17.7752"
                    x2="-12.8567"
                    y2="-17.8662"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3A44" />
                    <stop offset="1" stop-color="#C31162" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_769_740"
                    x1="-3.3786"
                    y1="53.7112"
                    x2="13.1207"
                    y2="37.7958"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#32A071" />
                    <stop offset="0.0685" stop-color="#2DA771" />
                    <stop offset="0.4762" stop-color="#15CF74" />
                    <stop offset="0.8009" stop-color="#06E775" />
                    <stop offset="1" stop-color="#00F076" />
                  </linearGradient>
                </defs>
              </svg>
              Get app now
            </button>
          </div>
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
        
        <div
          className="home_container_video_section"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
          <p>Meet your coach </p>
          <h1>now</h1>
        </div>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Fit4Sure
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {/* <iframe
                  ref={videoRef}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8deZSmo7vWs?autoplay=1" // Replace with your video's unique identifier
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe> */}

                <video src={video} className="video_section" controls />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="video_comp"> */}
      {/* className="video_section" */}
      <video className="video_section" muted autoPlay controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* </div> */}

      <div className="carousel_container_home_page">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={secImg} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={secImg} alt="First slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={secImg} alt="First slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <Carousel>
        <Carousel.Item>
          <mainImg text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <mainImg text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <mainImg text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      {/* <div className="card" style={{width: '18rem'}}>
  <img src="{mainImg}" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

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
          {/* <button>
            <Link to="/choosetrainer">Find your coach now</Link>
          </button> */}

          <Link to="/contact">
            <button>Talk to us</button>
          </Link>
        </div>
      </div>
      {/* <CarouselHome items={carouselItems} /> */}

      <div className="meet_container">
        <div className="meet_container_left">
          <div className="meet_container_left_upper">
            <div className="img_container_img">
              <img src={meet_img} alt="" />
              <p>Assistant Manager</p>
            </div>
            <svg
              width="6"
              height="204"
              viewBox="0 0 6 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L2.99999 201"
                stroke="#A2DEE7"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>

            <div className="img_container_img">
              <img src={meet_img} alt="" />
              <p>Assistant Manager</p>
            </div>
          </div>
          <div className="meet_container_left_middle">
            <svg
              width="204"
              height="6"
              viewBox="0 0 204 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L201 3"
                stroke="#A2DEE7"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
            <svg
              width="89"
              height="58"
              viewBox="0 0 89 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.437 0.363831C26.5285 0.555906 24.5747 1.30152 23.0948 2.02092C16.5346 5.20961 12.4438 11.7764 12.4267 19.1472C12.4204 21.8598 12.8075 24.0333 13.6721 26.1414C14.2955 27.6621 14.3009 27.769 13.8192 29.0874C13.233 30.692 13.1898 31.8987 13.6688 33.2838C14.5111 35.7198 16.5667 37.3239 19.1866 37.589C21.0752 37.7802 22.8645 37.0679 24.3315 35.5404C26.7919 32.9789 26.3775 28.6484 23.4534 26.3668C22.5116 25.6318 21.9645 25.4568 20.1773 25.3186L18.0322 25.1528L17.443 23.5325C17.0439 22.4345 16.8475 21.1047 16.8334 19.4082C16.7986 15.1504 18.2343 11.7081 21.2984 8.70202C27.1105 3.00074 35.5609 2.6378 42.0364 7.81206C44.0458 9.41759 45.0028 9.48447 46.5807 8.12963C50.4105 4.84078 55.4905 3.46885 59.9915 4.5073C62.6516 5.12094 64.1507 5.78878 66.0673 7.21403C67.6767 8.41067 70.0806 11.0547 70.0806 11.6282C70.0806 11.8344 69.1413 12.023 67.6031 12.1261C63.7946 12.3806 60.2453 13.7472 57.1674 16.1441C56.4241 16.7229 49.8318 23.0591 42.5181 30.2248C28.6709 43.7908 27.5198 44.7606 24.0732 45.7646C22.2206 46.3043 17.9887 46.3936 15.9277 45.9361C9.91431 44.6019 4.99437 38.8914 4.42379 32.5839C4.31808 31.4132 4.08654 30.276 3.90936 30.0566C2.90814 28.8166 0.662436 29.1719 0.135997 30.6531C-0.191639 31.5749 0.0969586 34.5524 0.741719 36.905C1.94235 41.285 5.85055 46.0916 10.0095 48.3034C15.9463 51.4603 23.4516 51.4865 29.161 48.37C30.192 47.8073 31.1121 47.2249 31.2058 47.0762C31.6347 46.3954 32.5833 47.118 37.133 51.5926C42.7094 57.0767 43.7938 58 44.6572 58C45.0722 58 48.8228 54.5315 55.9776 47.5307C66.3673 37.3649 66.7013 37.07 67.4977 37.3672C69.6785 38.1803 72.9831 37.0853 74.3828 35.0856C76.6877 31.7932 75.8345 28.1732 72.1909 25.7864C71.6744 25.4479 70.7978 25.3001 69.3082 25.3001C67.4241 25.3001 67.0241 25.4023 65.9685 26.152C64.2667 27.3616 63.5661 28.3464 63.1925 30.0554C62.9573 31.1307 62.9582 31.8801 63.1952 32.7436L63.5237 33.9405L54.0406 43.2432L44.5578 52.5459L40.0514 48.1326C37.5729 45.7054 35.5453 43.6088 35.5453 43.4733C35.5453 43.3378 41.0526 37.8344 47.7837 31.2438C58.5882 20.6652 60.2687 19.1351 62.1234 18.1885C69.1935 14.5798 77.5823 16.6593 82.1338 23.1489C83.3257 24.8484 84.3864 27.9057 84.6564 30.4201C84.9047 32.7318 85.49 33.5487 86.8979 33.5487C88.3123 33.5487 89 32.6508 89 30.8042C89 25.204 86.1164 19.6229 81.3422 15.982C80.0394 14.9887 77.1463 13.4082 76.1742 13.1586C75.7895 13.06 75.4057 12.5329 75.1204 11.7116C74.0483 8.62484 70.6818 4.73237 67.3851 2.76801C64.252 0.900876 61.9132 0.208875 58.1551 0.0374208C53.1922 -0.189122 49.509 0.722352 45.9891 3.04758L44.4986 4.03241L43.2136 3.18162C41.3259 1.93196 38.2096 0.631322 36.251 0.276336C34.0311 -0.126374 29.5427 -0.0818899 27.437 0.363831Z"
                fill="#A2DEE7"
              />
            </svg>
            <svg
              width="204"
              height="6"
              viewBox="0 0 204 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L201 3"
                stroke="#A2DEE7"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <div className="meet_container_left_bottom">
            <div className="img_container_img">
              <img src={meet_img} alt="" />
              <p>Assistant Manager</p>
            </div>
            <svg
              width="6"
              height="204"
              viewBox="0 0 6 204"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3L2.99999 201"
                stroke="#A2DEE7"
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
            <div className="img_container_img">
              <img src={meet_img} alt="" />
              <p>Assistant Manager</p>
            </div>{" "}
          </div>
        </div>
        <div className="meet_container_right">
          <div className="meet_container_right_upper">
            <h1>Meet</h1>
            <p>the experts who drive our phenomenal transformations</p>
            <Link to="/meetexperts">
              <button>Meet now</button>
            </Link>
          </div>
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
            <button>
              <Link to="/plans">View Plans</Link>
            </button>
          </div>
        </div>
      </div>

      <div className="hear_from_coach_outer">
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
          <div className="moving-div-bottom primary-bottom ">
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

          <div className="moving-div-bottom secondary-bottom ">
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
        <button className="hear_from_coach_button">
          <Link to="/community">Explore more</Link>
        </button>
      </div>

      <div className="trust_by">
        <img className="trust_by_img" src={trustByThou}></img>
        <div className="trust_by_text">
          <div>
            <h1>Trusted by</h1>
            <h1>
              <span>thousands</span>
            </h1>
          </div>
          <div className="trust_by_text_p">
            <p>Best fitness app winner 2023</p>
            <p>Rated 4.5 on Google Play</p>
          </div>
        </div>
      </div>

      <div className="big_changes_container">
        <div className="big_changes_container_left">
          <div className="big_changes_container_left_upper">
            <h1>Big changes need baby</h1>
            <h2>steps</h2>
          </div>
          <div className="big_changes_img_container">
            <img src={big_step} className="image-with-blur"></img>
          </div>
        </div>
        <div className="big_changes_container_right">
          <div className="div_big_changes">
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className="div_big_changes">
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className="div_big_changes">
            <label>Contact no</label>
            <input type="phone"></input>
          </div>
          {/* <div className="big_changes_temp"> */}
          <div className="select_comp_home_big div_big_changes">
            <label>Gender</label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="div_big_changes">
            <label> Age</label>
            <input type="number"></input>
          </div>
          {/* </div> */}
          {/* <div className="big_changes_temp"> */}
          <div className="div_big_changes">
            <label>Preferred Time Slot</label>
            <input type="number"></input>
          </div>
          <div className="select_comp_home_big div_big_changes">
            <label>Country</label>
            <select>
              <option>India</option>
              <option>Japan</option>
            </select>
          </div>
          {/* </div> */}

          <div className="button_comp">
            <button onClick={handleSubmit}>Book slot</button>
          </div>
        </div>
      </div>

      {/* <div id="carouselExampleControls" className="carousel slide trust_by" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src=".../800x400?auto=yes&bg=555&fg=333&text=Third slide" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div> */}

      <div className="slider_container">
        {/* <div className="slider_container_upper"> */}
        <CarouselBottom />

        <div className="slider_container_right_com">
          <div className="slider_container_right_com_upper">
            <div className="slider_container_right_com_upper_left">
              <h1>The Times of India</h1>
              <hr></hr>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className="slider_container_right_com_upper_right">
              <h1>4.5</h1>
            </div>
          </div>
          <div className="slider_container_right_com_lower">
            <div className="slider_container_right_com_lower_left">
              <h1>The Times of India</h1>
              <hr></hr>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
            </div>
            <div className="slider_container_right_com_lower_right">
              <h1>4.5</h1>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* <svg
          width="1512"
          height="409"
          viewBox="0 0 1512 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M534.275 288.714C295.762 231.667 63.5286 328.072 -15.9404 395.504L9.49958 657L633 770L1556 657L1516.95 395.223L1517 171.713C1488.02 161.532 1439.72 92.2466 1265.52 90.0247C1084.79 87.7195 1013.79 206.903 948.714 247.349C869.679 296.468 832.415 360.022 534.275 288.714Z"
            stroke="#DBE7C2"
            stroke-opacity="0.36"
            stroke-width="6"
          />
          <path
            d="M534.275 268.714C295.762 211.667 63.5287 308.072 -15.9402 375.504L-15.9402 660L761.5 745.5L1535 635.5L1516.95 375.223L1517 151.713C1488.02 141.532 1439.72 72.2466 1265.52 70.0247C1084.79 67.7195 1013.79 186.903 948.714 227.349C869.679 276.468 832.415 340.022 534.275 268.714Z"
            stroke="#DBE7C2"
            stroke-opacity="0.36"
            stroke-width="6"
          />
          <path
            d="M534.274 248.714C295.762 191.667 63.5285 288.072 -15.9404 355.504L-3.00041 620.5L746 608L1617.5 706L1516.95 355.223L1517 131.713C1488.02 121.532 1439.72 52.2466 1265.52 50.0247C1084.79 47.7196 1013.79 166.903 948.714 207.349C869.679 256.468 832.415 320.022 534.274 248.714Z"
            stroke="#DBE7C2"
            stroke-opacity="0.36"
            stroke-width="6"
          />
          <path
            d="M534.275 228.714C295.763 171.667 63.5289 268.072 -15.94 335.504L-85.4999 620.5L740 669L1605 648L1516.95 335.223L1517 111.713C1488.02 101.531 1439.72 32.2465 1265.52 30.0246C1084.79 27.7195 1013.79 146.903 948.714 187.349C869.68 236.468 832.415 300.022 534.275 228.714Z"
            stroke="#DBE7C2"
            stroke-opacity="0.36"
            stroke-width="6"
          />
          <path
            d="M534.275 303.714C295.763 246.667 63.5289 343.072 -15.94 410.504L1516.95 410.223L1517 186.713C1488.02 176.532 1439.72 107.247 1265.52 105.025C1084.79 102.72 1013.79 221.903 948.714 262.349C869.68 311.468 832.415 375.022 534.275 303.714Z"
            fill="#DBE7C2"
            fill-opacity="0.36"
          />
        </svg> */}
      </div>
      <div className="start_now">
        <img src={startNow}></img>
        <div className="start_now_text">
          <h1>
            <span>Start now</span>
          </h1>
          <h1>Why wait?</h1>
        </div>
      </div>
      <div className="footer_home">
        <div className="footer_upper">
          <svg
            width="70"
            height="60"
            viewBox="0 0 108 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M33.2943 0.439106C32.1919 0.670922 29.821 1.57081 28.0252 2.43904C20.0644 6.28746 15.1003 14.2129 15.0796 23.1086C15.0719 26.3825 15.5417 29.0057 16.5908 31.55C17.3473 33.3853 17.3539 33.5144 16.7694 35.1054C16.058 37.0421 16.0056 38.4984 16.5868 40.1702C17.609 43.1102 20.1034 45.0461 23.2826 45.3661C25.5744 45.5968 27.7457 44.7371 29.5258 42.8936C32.5115 39.8022 32.0086 34.5757 28.4603 31.822C27.3175 30.9349 26.6535 30.7237 24.4848 30.5569L21.8818 30.3568L21.1668 28.4013C20.6825 27.0762 20.4442 25.4712 20.427 23.4236C20.3848 18.285 22.1271 14.1304 25.8452 10.5024C32.8982 3.62159 43.1525 3.18356 51.0105 9.42834C53.4488 11.3661 54.6102 11.4468 56.5248 9.81162C61.1723 5.84232 67.3368 4.18655 72.7987 5.43984C76.0267 6.18044 77.8459 6.98646 80.1716 8.70659C82.1245 10.1508 85.0417 13.3418 85.0417 14.0341C85.0417 14.2829 83.9018 14.5105 82.0352 14.6349C77.4137 14.9421 73.1066 16.5915 69.3717 19.4842C68.4697 20.1829 60.47 27.8299 51.595 36.4782C34.7917 52.851 33.3949 54.0215 29.2124 55.2332C26.9643 55.8845 21.829 55.9922 19.328 55.4401C12.0309 53.8298 6.06059 46.938 5.36819 39.3254C5.23992 37.9124 4.95895 36.54 4.74395 36.2752C3.52897 34.7787 0.803855 35.2075 0.16503 36.9951C-0.23255 38.1076 0.117658 41.7011 0.900063 44.5405C2.35701 49.8268 7.09955 55.6278 12.1464 58.2972C19.3506 62.1073 28.4581 62.1389 35.3864 58.3776C36.6375 57.6985 37.754 56.9956 37.8677 56.816C38.3881 55.9944 39.5393 56.8665 45.0603 62.2669C51.8271 68.8857 53.1431 70 54.1908 70C54.6944 70 59.2456 65.8138 67.9279 57.3647C80.5356 45.0955 80.9409 44.7396 81.9073 45.0984C84.5537 46.0797 88.5638 44.7581 90.2623 42.3447C93.0592 38.3711 92.0239 34.0022 87.6024 31.1215C86.9756 30.713 85.9119 30.5345 84.1044 30.5345C81.818 30.5345 81.3326 30.6579 80.0517 31.5628C77.9865 33.0226 77.1363 34.2112 76.683 36.2737C76.3977 37.5715 76.3988 38.476 76.6863 39.5181L77.085 40.9627L65.5774 52.1901L54.0701 63.4174L48.6017 58.091C45.5941 55.1617 43.1336 52.6313 43.1336 52.4677C43.1336 52.3042 49.8166 45.6623 57.9847 37.708C71.0957 24.9408 73.135 23.0941 75.3857 21.9517C83.9652 17.5963 94.1448 20.1061 99.6679 27.9384C101.114 29.9895 102.401 33.6793 102.729 36.7139C103.03 39.5039 103.741 40.4898 105.449 40.4898C107.165 40.4898 108 39.4061 108 37.1775C108 30.4186 104.501 23.6828 98.7073 19.2887C97.1265 18.0898 93.6157 16.1823 92.4361 15.8811C91.9692 15.762 91.5035 15.1259 91.1573 14.1347C89.8564 10.4093 85.7712 5.71148 81.7706 3.34071C77.9687 1.08726 75.1306 0.25209 70.5703 0.045163C64.5479 -0.228251 60.0783 0.871804 55.8069 3.67812L53.9983 4.8667L52.439 3.83989C50.1483 2.33167 46.3667 0.761941 43.99 0.333509C41.2962 -0.15252 35.8496 -0.0988326 33.2943 0.439106Z"
              fill="#FF6B62"
            />
          </svg>
          <h1>Fit4Sure</h1>
        </div>

        <div className="footer_lower">
          <button className="footer_lower_button">
            <svg
              width="30"
              height="28"
              viewBox="0 0 33 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.45727 1.18664C1.04855 1.60166 0.812012 2.24781 0.812012 3.0846V32.9323C0.812012 33.7691 1.04855 34.4153 1.45727 34.8303L1.55815 34.9214L18.8011 18.2025V17.8077L1.55815 1.08879L1.45727 1.18664Z"
                fill="url(#paint0_linear_1_185)"
              />
              <path
                d="M24.5426 23.7776L18.8013 18.2018V17.807L24.5495 12.2313L24.6782 12.3038L31.4857 16.0609C33.4284 17.1271 33.4284 18.8817 31.4857 19.9547L24.6782 23.705L24.5426 23.7776Z"
                fill="url(#paint1_linear_1_185)"
              />
              <path
                d="M24.6779 23.7053L18.8009 18.0047L1.45705 34.8298C2.10231 35.4878 3.15456 35.5671 4.35117 34.9091L24.6779 23.7053Z"
                fill="url(#paint2_linear_1_185)"
              />
              <path
                d="M24.6779 12.3043L4.35117 1.1004C3.15456 0.449193 2.10231 0.528484 1.45705 1.18644L18.8009 18.0049L24.6779 12.3043Z"
                fill="url(#paint3_linear_1_185)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_185"
                  x1="17.2702"
                  y1="33.2432"
                  x2="-5.36985"
                  y2="9.90287"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A0FF" />
                  <stop offset="0.0066" stop-color="#00A1FF" />
                  <stop offset="0.2601" stop-color="#00BEFF" />
                  <stop offset="0.5122" stop-color="#00D2FF" />
                  <stop offset="0.7604" stop-color="#00DFFF" />
                  <stop offset="1" stop-color="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_185"
                  x1="34.0155"
                  y1="18.0025"
                  x2="0.347776"
                  y2="18.0025"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE000" />
                  <stop offset="0.4087" stop-color="#FFBD00" />
                  <stop offset="0.7754" stop-color="#FFA500" />
                  <stop offset="1" stop-color="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_185"
                  x1="21.4821"
                  y1="14.9057"
                  x2="-9.21956"
                  y2="-16.7456"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF3A44" />
                  <stop offset="1" stop-color="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1_185"
                  x1="-2.90877"
                  y1="44.7603"
                  x2="10.8009"
                  y2="30.6267"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32A071" />
                  <stop offset="0.0685" stop-color="#2DA771" />
                  <stop offset="0.4762" stop-color="#15CF74" />
                  <stop offset="0.8009" stop-color="#06E775" />
                  <stop offset="1" stop-color="#00F076" />
                </linearGradient>
              </defs>
            </svg>
            Google Play
          </button>
          <button className="footer_lower_button">
            <svg
              width="25"
              height="28"
              viewBox="0 0 30 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7329 18.7083C24.6927 14.3572 28.3884 12.2404 28.5574 12.1419C26.4644 9.16782 23.2203 8.76147 22.0803 8.72907C19.3556 8.44962 16.7127 10.318 15.3247 10.318C13.909 10.318 11.7717 8.75607 9.46814 8.80197C6.50384 8.84652 3.7307 10.5192 2.20977 13.1166C-0.929061 18.4126 1.4119 26.1954 4.41914 30.4762C5.92345 32.5728 7.68125 34.9137 9.98204 34.8313C12.233 34.7409 13.0738 33.4327 15.7901 33.4327C18.4815 33.4327 19.2711 34.8313 21.6176 34.7787C24.0334 34.7409 25.5543 32.6727 27.006 30.5572C28.7444 28.1542 29.4425 25.7877 29.4702 25.6662C29.4134 25.6473 24.7786 23.9233 24.7329 18.7083Z"
                fill="black"
              />
              <path
                d="M20.3003 5.91297C21.5109 4.43742 22.3393 2.42997 22.1093 0.392822C20.3571 0.468422 18.1657 1.57407 16.9038 3.01722C15.7874 4.28892 14.79 6.37332 15.0477 8.33352C17.016 8.47662 19.037 7.36557 20.3003 5.91297Z"
                fill="black"
              />
            </svg>
            App Store
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
