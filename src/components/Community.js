import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import notes from "../images/notes.png";
import jobs from "../images/jobs.png";
import cheatsheets from "../images/cheatsheets.png";
import resume from "../images/resume.png";
import roadmaps from "../images/roadmaps.png";

// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useState } from "react";

const Community = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div
      id="community"
      className="pt-10 px-[7rem] bg-[#fff] md:px-[5rem] sm:px-[1rem]"
    >
      <h1 className="text-4xl font-bold sm:text-3xl">
        Our <span className="text-primary">Community</span>
      </h1>
      <span className="inline-block mt-5 text-slate-500 md:text-xl">
        Join our community to access exclusive resources, stay updated with the
        latest job opportunities, and connect with like-minded peers.
      </span>

      {/* Container for Swiper and Buttons */}
      <div className="relative mt-16 mb-4">
        <button
          id="prevBtn"
          className={`absolute top-1/2 left-[-4rem] bg-secondary  transform -translate-y-1/2 rounded-3xl text-2xl p-2 ${
            isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          } sm:left-[-.8rem] sm:z-10 `}
          disabled={isBeginning}
        >
          <GrFormPreviousLink />
        </button>
        <button
          id="nextBtn"
          className={`absolute top-1/2 right-[-3rem]  bg-secondary  transform -translate-y-1/2 rounded-3xl text-2xl p-2 ${
            isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          } sm:right-[-.8rem]  sm:z-10`}
          disabled={isEnd}
        >
          <GrFormNextLink />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
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
          breakpoints={{
            // Define breakpoints for different screen sizes
            0: {
              slidesPerView: 1, // Show 1 card per view on smaller screens
            },
            600: {
              slidesPerView: 2, // Show 2 cards per view on medium-sized screens
            },
            1278: {
              slidesPerView: 3, // Show 3 cards per view on larger screens
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="">
            <div className="h-[20rem] w-[18rem] flex flex-col justify-center items-center px-4 gap-4 bg-primary text-white rounded-3xl shadow-xl  hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out sm:w-[16rem]">
              <div className="h-[5rem] w-[5rem] mb-4">
                <img
                  src={notes}
                  alt="Notes"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-md font-bold">Study Notes</h1>
              <p className="">Key notes to boost your placement prep.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[20rem] w-[18rem] flex flex-col justify-center items-center px-4 gap-4 bg-primary text-white rounded-3xl shadow-xl hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out sm:w-[16rem]">
              <div className="h-[5rem] w-[5rem] mb-4">
                <img
                  src={cheatsheets}
                  alt="Notes"
                  className="h-full w-full object-contain"
                />
              </div>
              <h1 className="text-md font-bold">Cheat Sheets</h1>
              <p className="">Quick guides for essential concepts.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[20rem] w-[18rem] flex flex-col justify-center items-center px-4 gap-4 bg-primary text-white rounded-3xl shadow-xl hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out sm:w-[16rem]">
              <div className="h-[5rem] w-[5rem] mb-4">
                <img
                  src={roadmaps}
                  alt="Notes"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-md font-bold">Placement Roadmaps</h1>
              <p className="">Step-by-step preperation plans.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[20rem] w-[18rem] flex flex-col justify-center items-center px-4 gap-4 bg-primary text-white rounded-3xl shadow-xl hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out sm:w-[16rem]">
              <div className="h-[5rem] w-[5rem] mb-4">
                <img
                  src={jobs}
                  alt="Notes"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-md font-bold">Job Alerts</h1>
              <p className="">Stay updated with the latest openings.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="h-[20rem] w-[18rem] flex flex-col justify-center items-center px-4 gap-4 bg-primary text-white rounded-3xl shadow-xl hover:bg-secondary hover:text-black transition-colors duration-300 ease-in-out sm:w-[16rem]">
              <div className="h-[5rem] w-[5rem] mb-4">
                <img
                  src={resume}
                  alt="Notes"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-md font-bold">Resume Templates</h1>
              <p className=" ">Polished templates for standout resumes.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="my-4 flex justify-center items-center">
        <button className="bg-secondary py-4 px-12 rounded-2xl text-black font-bold hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out">
          Join Our Community
        </button>
      </div>
    </div>
  );
};
export default Community;
