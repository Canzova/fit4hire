import React, { useState } from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { IoStarSharp } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Courses = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="pt-10 px-[7rem] ">
      <h1 className="text-4xl font-bold">
        Most <span className="text-primary">Popular Courses</span>
      </h1>
      <span className="inline-block mt-5 text-slate-500">
        Various versions have evolved over the years, sometimes by accident,
      </span>

      {/* Container for Swiper and Buttons */}
      <div className="relative mt-16 mb-4">
        {/* Custom Navigation Buttons */}
        <button
          id="prevBtn"
          className={`absolute top-1/2 left-[-4rem] transform -translate-y-1/2 text-2xl bg-secondary p-2 rounded-3xl ${
            isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <GrFormPreviousLink />
        </button>
        <button
          id="nextBtn"
          className={`absolute top-1/2 right-[-3rem] transform -translate-y-1/2 text-2xl bg-secondary p-2 rounded-3xl ${
            isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <GrFormNextLink />
        </button>

        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: "#nextBtn",
            prevEl: "#prevBtn",
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="shadow-2xl h-[28rem] w-[20rem] rounded-2xl p-[1rem] flex flex-col">
              <div className="relative">
                <img src={c1} alt="Courses" className="rounded-2xl" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-2xl h-[28rem] w-[20rem] rounded-2xl p-[1rem] flex flex-col">
              <div className="relative">
                <img src={c2} alt="Courses" className="rounded-2xl" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-2xl h-[28rem] w-[20rem] rounded-2xl p-[1rem] flex flex-col">
              <div className="relative">
                <img src={c3} alt="Courses" className="rounded-2xl" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-2xl h-[28rem] w-[20rem] rounded-2xl p-[1rem] flex flex-col">
              <div className="relative">
                <img src={c4} alt="Courses" className="rounded-2xl" />
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="shadow-2xl h-[28rem] w-[20rem] rounded-2xl p-[1rem] flex flex-col">
              <div className="relative">
                <img src={c1} alt="Courses" className="rounded-2xl" />
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Courses;
