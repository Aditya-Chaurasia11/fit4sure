import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "./carousel.css";

export const CarouselBottom = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "1Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("../images/Frame 26.png"),
    },
    {
      title: "Baseball",
      description:
        "2Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("../images/Frame 26.png"),
    },
    {
      title: "Baseball",
      description:
        "3Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: require("../images/Frame 26.png"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="car_main_componenet">
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex - 1);
        }}
      >
        <span class="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <div className="car_container_outer">
        <div className="car_left_outer_container"></div>
        <div className="car_left_container"></div>

        <div className="car">
          <div
            className="inner"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {items.map((item) => {
              return <CarouselItem item={item} width={"100%"} />;
            })}
          </div>
        </div>
        <div className="car_right_container"></div>
        <div className="car_right_outer_container"></div>
      </div>
      <button
        className="button-arrow"
        onClick={() => {
          updateIndex(activeIndex + 1);
        }}
      >
        <span class="material-symbols-outlined">arrow_forward_ios</span>
      </button>
    </div>
  );
};
