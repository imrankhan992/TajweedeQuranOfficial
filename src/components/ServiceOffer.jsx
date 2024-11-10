import React from "react";
import learnQuran from "./LearnQuran";
import { Button } from "./ui/button";
import { Trail } from "./Trail";

const ServiceOffer = () => {
  return (
    <div className="md:px-16 px-6 text-center py-16">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-[#014B5E] py-2" id="courses">
        Our Courses
        </h1>
        <span className="mb-7 font-bold text-xl  text-black">
          Select  Course now for a free trial lesson for you or your kid.
        </span>
      </div>
      {/* courses */}
     <div className="grid  md:grid-cols-4 justify-between w-full flex-auto gap-4">
     {
        learnQuran.map((item) => {
          return  (
            <div key={item.id} className="group boxShadow p-4 flex justify-between flex-col gap-3 shadow-lg min-h-[200px]  !rounded-3xl border-2 border-[#032E3C] cursor-pointer hover:bg-[#C28336]  duration-150 active:transition-transform  hover:duration-1000 hover:transition-colors">
              <div className="w-full flex flex-col items-center justify-center">
              <img loading="lazy" src={item?.image} alt="" className="w-40 h-40" />
              <h1 className=" font-semibold text-xl">{item.title}</h1>
              <p className="text-sm underline text-center text-[#032E3C] font-bold py-2">{item.subtitle}</p>
              <p className="text-sm  text-center">{item.description}</p>
              </div>
            
              <Trail  courseName={item.title}/>
            </div>
          )
        })
      }
     </div>
     
    </div>
  );
};

export default ServiceOffer;
