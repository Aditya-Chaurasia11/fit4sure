import React from "react";
import AppLayout from "../../Components/Trainer/Layout";
import "./trainerclient.css";
import tempImg from "../../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import CarouselSlider from "../../Components/Trainer/Slider";
import CardForSlider from "../../Components/Trainer/CardForSlider";

const TrainerClient = () => {
  const data = [
    {
      Img: tempImg,
      Name: "John",
      Weight: 30,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Alice",
      Weight: 25,
      Height: "121cm",  
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
    {
      Img: tempImg,
      Name: "Bob",
      Weight: 28,
      Height: "121cm",
      Date1: " 23rd September",
      Date2: "23rd October",
    },
  ];
  const columns = ["Img", "Name", "Weight", "Height", "Date1", "Date2"];
  return (
    <div className="trainer_client_container_outer">
      <AppLayout>
        <div className="trainer_client_container_header">
          <div className="trainer_client_container_header_left">
            <h1>Clients</h1>
            <p>see your client information in here!</p>
          </div>
          <div className="trainer_client_container_right">
            <input
              type="text"
              placeholder="can't find something? search it here!"
            ></input>
            <div>make new post</div>
          </div>
        </div>
        <div className="trainer_client_container_body">
          <div className="trainer_client_container_body_first">
            <div className="trainer_client_container_body_left">
              <p>past client</p>
              <h2>42</h2>
            </div>
            <div className="trainer_client_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
          <div className="trainer_client_container_body_second">
            <div className="trainer_client_container_body_left">
              <p>past client</p>
              <h2>42</h2>
            </div>
            <div className="trainer_client_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
          <div className="trainer_client_container_body_third">
            <div className="trainer_client_container_body_left">
              <p>past client</p>
              <h2>42</h2>
            </div>
            <div className="trainer_client_container_body_right">
              <h2>22.5%</h2>
              <p>this month</p>
            </div>
          </div>
        </div>
        <div className="trainer_client_container_footer">
          <div className="trainer_client_container_footer_header">
            <h2>Your current clients</h2>
            <button className="trainer_client_container_footer_header_button">
              See Details
            </button>
          </div>
          <div className="trainer_client_container_footer_body">
            <table className="centered-table">
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>
                        {colIndex === 0 ? (
                          <img
                            src={row[column]}
                            className="centered-table_img"
                          ></img>
                        ) : (
                          row[column]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AppLayout>
    </div>
  );
};

export default TrainerClient;
