import React from "react";
import "./CarouselItem.css";

function CarouselItem({ properties }) {
  const { src, heading, detail, scale, hide } = properties;

  return (
    <div>
      <div className={`${hide ? "hide__item" : null} content__wrap mx-auto`}>
        <img
          width={`${scale ? "450px" : "300px"}`}
          src={src}
          alt={heading}
          className="flexed carousel-img"
        />
        <div className="text text-white p-2">
          <p className="mb-1 live text-center ">Live</p>
          <p className="mb-0 title"> {heading} </p>
          <p className="mb-0 detail"> {detail} </p>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;

