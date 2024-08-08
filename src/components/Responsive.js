import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container px-8 my-16">
      <Slider {...settings}>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>
        <div className="h-[20rem] !w-[20rem] border-2 border-red-400"></div>

      </Slider>
    </div>
  );
}

export default Responsive;
