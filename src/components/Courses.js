import React, { useState } from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";

import { IoStarSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {
  let settings = {
    dots: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay interval in milliseconds (2000ms = 2 seconds)
    pauseOnHover: true, // Pause autoplay when hovering over the slider
    infinite: true,
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
    <div className="pt-10 px-[7rem] ">
      <h1 className="text-4xl font-bold">
        Most <span className="text-primary">Popular Courses</span>
      </h1>
      <span className="inline-block mt-5 text-slate-500">
        Various versions have evolved over the years, sometimes by accident,
      </span>

      {/* Container for Swiper and Buttons */}
      <div className="relative mt-12 mb-20">
        <div className="slider-container">
          <Slider {...settings}>
            <div className="mb-8 h-[28rem] !w-[20rem] p-[1rem] flex flex-col shadow-xl rounded-2xl">
              <div className="relative">
                <img src={c2} alt="Courses" className="rounded-2xl w-full" />
                <div className="absolute top-[1rem] left-[1rem] bg-slate-300 p-2 px-4 rounded-lg ">
                  HTML
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-slate-600 font-bold text-2xl mt-4 text-left">
                    Course Name
                  </h1>
                  <div className="flex py-4 border-b-2 border-slate-300">
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />

                    <div>
                      <span>(15)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="font-bold text-2xl">$500</h1>
                <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                  <FaExternalLinkAlt className="" />
                </div>
              </div>
            </div>
            <div className="mb-8 h-[28rem] !w-[20rem] p-[1rem] flex flex-col shadow-xl rounded-2xl">
              <div className="relative">
                <img src={c1} alt="Courses" className="rounded-2xl w-full" />
                <div className="absolute top-[1rem] left-[1rem] bg-slate-300 p-2 px-4 rounded-lg ">
                  HTML
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-slate-600 font-bold text-2xl mt-4 text-left">
                    Course Name
                  </h1>
                  <div className="flex py-4 border-b-2 border-slate-300">
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />

                    <div>
                      <span>(15)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="font-bold text-2xl">$500</h1>
                <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                  <FaExternalLinkAlt className="" />
                </div>
              </div>
            </div>
            <div className="mb-8 h-[28rem] !w-[20rem] p-[1rem] flex flex-col shadow-xl rounded-2xl">
              <div className="relative">
                <img src={c3} alt="Courses" className="rounded-2xl w-full" />
                <div className="absolute top-[1rem] left-[1rem] bg-slate-300 p-2 px-4 rounded-lg ">
                  HTML
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-slate-600 font-bold text-2xl mt-4 text-left">
                    Course Name
                  </h1>
                  <div className="flex py-4 border-b-2 border-slate-300">
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />

                    <div>
                      <span>(15)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="font-bold text-2xl">$500</h1>
                <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                  <FaExternalLinkAlt className="" />
                </div>
              </div>
            </div>
            <div className="mb-8 h-[28rem] !w-[20rem] p-[1rem] flex flex-col shadow-xl rounded-2xl">
              <div className="relative">
                <img src={c4} alt="Courses" className="rounded-2xl w-full" />
                <div className="absolute top-[1rem] left-[1rem] bg-slate-300 p-2 px-4 rounded-lg ">
                  HTML
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-slate-600 font-bold text-2xl mt-4 text-left">
                    Course Name
                  </h1>
                  <div className="flex py-4 border-b-2 border-slate-300">
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />

                    <div>
                      <span>(15)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="font-bold text-2xl">$500</h1>
                <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                  <FaExternalLinkAlt className="" />
                </div>
              </div>
            </div>
            <div className="mb-8 h-[28rem] !w-[20rem] p-[1rem] flex flex-col shadow-xl rounded-2xl">
              <div className="relative">
                <img src={c1} alt="Courses" className="rounded-2xl w-full" />
                <div className="absolute top-[1rem] left-[1rem] bg-slate-300 p-2 px-4 rounded-lg ">
                  HTML
                </div>
              </div>

              <div className="">
                <div className="">
                  <h1 className="text-slate-600 font-bold text-2xl mt-4 text-left">
                    Course Name
                  </h1>
                  <div className="flex py-4 border-b-2 border-slate-300">
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />
                    <IoStarSharp className=" text-secondary text-2xl" />

                    <div>
                      <span>(15)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <h1 className="font-bold text-2xl">$500</h1>
                <div className="bg-[#FFC27A] h-[3rem] w-[3rem] clipPath flex justify-center items-center cursor-pointer hover:bg-secondary">
                  <FaExternalLinkAlt className="" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Courses;
