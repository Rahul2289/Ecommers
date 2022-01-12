import React from "react";
import "./Slider.css";

import Slider from "react-slick";

const SliderC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Slider">
      <Slider {...settings}>
        <div className="slider-container">
          <h1>slider1</h1>
        </div>
        <div className="slider-container">
          <h1>slider2</h1>
        </div>
        <div className="slider-container">
          <h1>slider3</h1>
        </div>
      </Slider>
    </div>
  );
};

export default SliderC;
