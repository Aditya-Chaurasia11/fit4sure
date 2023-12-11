import React from "react";
import startNow from "../images/happy-female-athlete-holding-exercise-mat-while-texting-mobile-phone-home.jpg";
import './card.css'

const Card = () => {
  return (
    <div className="card_comp_cont">
      <img src={startNow}></img>
      <span>Shobit Gupta</span>
      <p>Assistant Manager</p>
    </div >
  );
};

export default Card;
