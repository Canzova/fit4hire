import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import quote from "../images/quote.png";

// Icons
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

const Reviews = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div className="pt-10 px-[7rem] bg-[#F8F4FF]">
      <h1 className="text-4xl font-bold">
        Student <span className="text-primary">Feedback</span>
      </h1>
      <span className="inline-block mt-5 text-slate-500">
        Various versions have evolved over the years, sometimes by accident,
      </span>

      {/* Container for Swiper and Buttons */}
      <div className="relative mt-16 pb-4">
        <button
          id="prevBtn"
          className={`absolute top-1/2 left-[-4rem] bg-secondary  transform -translate-y-1/2 rounded-3xl text-2xl p-2 ${
            isBeginning ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={isBeginning}
        >
          <GrFormPreviousLink />
        </button>
        <button
          id="nextBtn"
          className={`absolute top-1/2 right-[-3rem]  bg-secondary  transform -translate-y-1/2 rounded-3xl text-2xl p-2 ${
            isEnd ? "cursor-not-allowed opacity-50" : "cursor-pointer"
          }`}
          disabled={isEnd}
        >
          <GrFormNextLink />
        </button>
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={false}
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
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s1}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s2}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s3}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s1}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s2}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-3xl shadow-2xl">
            <div className=" w-[28rem] p-4 ">
              <div className="flex justify-between items-start mb-8">
                <div className="flex justify-between items-center gap-4">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={s1}
                      alt="Student"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">Peter parker</h1>
                    <div className="text-[1rem]">Javascript Student</div>
                  </div>
                </div>
                <div className="">
                  <img src={quote} alt="Quote" />
                </div>
              </div>
              <div className="text-left text-[#363A3D]">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Reviews;
