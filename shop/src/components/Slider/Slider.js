import React from "react";
import "./Slider.css";

import Slider from "react-slick";

const SliderC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="Slider">
      <Slider {...settings}>
        <div className="slider-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.softwarecreatives.com/assets/images/ibg/in-img-5.jpg"
            alt=""
          ></img>
        </div>
        <div className="slider-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://www.webdreams.in/img/slider/ecommerce.jpg"
            alt=""
          ></img>
        </div>
        <div className="slider-container">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK51WBsW1OUeZeiyDgL2b7L_ab-yx1aF5u9KzGK51Qol1gVg1l-8SyVgFb5f9qrzv7cqQ&usqp=CAU"
            alt=""
          ></img>
        </div>
      </Slider>
    </div>
  );
};

export default SliderC;
