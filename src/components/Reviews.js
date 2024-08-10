import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import quote from "../images/quote.png";

const Reviews = () => {
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
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div id="reviews" className="py-10 px-[7rem] bg-[#F8F4FF]">
      <h1 className="text-4xl font-bold">
        Student's <span className="text-primary">Feedback</span>
      </h1>
      <span className="inline-block mt-5 text-slate-500 md:text-xl">
        Various versions have evolved over the years, sometimes by accident,
      </span>

      {/* Container for Swiper and Buttons */}
      <div className="">
        <div className="slider-container my-8">
          <Slider {...settings}>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
            <div className="h-[20rem] w-[28rem] my-8 p-4 rounded-3xl shadow-xl md:h-[18rem]">
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
              <div className="text-left text-[#363A3D] text-lg">
                Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
                pharetra. Nam sed imperdiet turpis. In hac habitasse platea
                dictumst. Praesent nulla massa, hendrerit vestibulum gravida in,
                feugiat auctor felis.
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Reviews;
