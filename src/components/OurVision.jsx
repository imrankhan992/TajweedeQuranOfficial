import React, { useEffect } from "react";
import { Button } from "./ui/button";

const OurVision = () => {
 
  return (
    <>
      <div
        className="flex items-center justify-center flex-col gap-6"
        id="aboutUs"
      >
        <figure>
          <img src="/TQOA.png" width={170} height={170} alt="tajweedequranlogo" loading="lazy" />
        </figure>
        <div className="md:flex text-center    items-start justify-start gap-2" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl">
            Welcome to the
           
          </h3>
          <div className=" text-xl md:text-2xl font-semibold items-center justify-center text-center">
              TajweedeQuranOfficial
            <div className="flex items-center justify-center space-x-2">
              <div className="border w-6  border-red-900"/>
            <span className="text-xs flex items-center justify-center text-red-900 ">Online Quran Academy</span>
            <div className="border w-6  border-red-900"/>
            </div>
             
            </div>
         
        </div>
      </div>
      {/* second part */}
      <h1 className="md:text-6xl text-center text-3xl font-semibold mt-10" data-aos="fade-up">
            In The Name Of Allah <br />
            The Beneficent The Merciful
          </h1>
      <div className="grid md:grid-cols-2 px-6 md:px-16 gap-6 items-start justify-center pb-16 md:py-16">
        <div className="text-justify text-lg md:text-xl">
          <span>
            Tajweed ul Quran Academy is an Online Quran School established since
            2020. We are providing online Quran classes that are suitable for
            the whole family specially one of the best online Quran classes for
            kids. Our Quran tutors are ready to help students and to teach Quran
            online to the students who want to learn Islam and Quran online. We
            have developed extensive Quran courses for you and your kid's basic
            islamic education. Our online Quran tutors utilize unique learning
            tools, and combine both ancient and modern methods for online Quran
            classes. Learn fundamental teachings of Islam and TajweedeQuranOfficial
            online through our innovative Islamic courses and experience it for
            yourself.
          </span>{" "}
          <br />{" "}
          {/* <Button className="md:mt-7 mt-3 bg-transparent border-2 border-[#C28336] active:scale-95 duration-150  transition-transform hover:bg-[#C28336] !px-16 !py-6 rounded-full text-lg text-black">
            Read More
          </Button>{" "} */}
        </div>
        <div className="flex items-start justify-center gap-10 flex-col">
          {/* our vision */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-start">
            <div className="w-20 md:w-56 h-20">
              {" "}
              <img
                src={"/Images/icons/ourmission.png"}
                width={250}
                height={250}
                alt=""
                className="rounded-full border-2 p-2 border-[#032e3c]  "
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Our Mission</h1>
              <span className="text-gray-700 text-lg">
                Our mission at Tajweed ul Quran Academy is to provide accessible
                and high-quality online Quran education for individuals and
                families, fostering a deep understanding and love for the Quran
                and Islam.
              </span>
            </div>
          </div>
          {/* our mission */}
          <div className="flex items-center justify-center md:justify-start gap-4 md:flex-row flex-col text-center md:text-start">
            <div className="w-20 md:w-56 h-20 ">
              {" "}
              <img
                src={"/Images/icons/quran.png"}
                width={200}
                height={200}
                alt=""
                className="rounded-full border-2 p-2 border-[#032e3c] "
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">Our Vision</h1>
              <span className="text-gray-700 text-lg">
                Our vision is to be a leading online Quran school, cultivating a
                global community of learners who embody the teachings of the
                Quran and contribute positively to society.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurVision;
