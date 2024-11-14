import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import reviews from "./Reviews";

const StudentsReviews = () => {
  return (
    <div className="md:px-16 pb-16 text-center">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#014B5E] py-2">
          Hear From Our Students
        </h1>
        <span className="mb-7 font-semibold text-xl text-black">
          Contact now for a free trial lesson and experience learning firsthand!
        </span>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
       
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {reviews.map((item) => {
          return (
            <SwiperSlide key={item?.id}>
              <div className="group p-7  items-center flex justify-between md:w-[40%]  flex-col gap-3   ">
                <div className="w-full flex items-center flex-col  ">
                  <img loading="lazy" src={item?.image} alt="" className="!h-40 !w-40 rounded-full" />
                  <div className="flex items-center justify-center gap-2">
                    <h1 className=" font-semibold text-xl">{item?.name}</h1>{" "}
                    <img loading="lazy" src={item?.Flag} className="!h-10 !w-10" alt="" />
                  </div>
                  <p className="text-sm underline text-center text-[#032E3C] font-bold py-2">
                    {item?.country}
                  </p>
                  <p className="  text-center md:text-2xl">{item?.review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default StudentsReviews;
