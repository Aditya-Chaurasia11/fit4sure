import React from "react";
import "./carousel.css";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="car-item" style={{ width: width }}>
      <div className="car-item_card">
        <div className="car_item_header">
          <img className="car-img" src={item.icon} />
          <div>
            <h4>Shobit Guptabro</h4>
            <p>User since 2019</p>
          </div>
        </div>
        <div className="car-item-text">{item.description}</div>
      </div>
    </div>
  );
};
