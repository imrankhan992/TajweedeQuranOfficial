import React, { useState } from "react";

const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed right-4 top-3 md:hidden z-50">
      {/* Hamburger Menu Icon */}
      <div onClick={() => setOpen(!open)} className="flex items-end justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-[#032E3C] shadow-lg transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      
        <ul className="w-full text-white font-bold text-lg flex flex-col items-center justify-center gap-10 py-10 ">
          <li className="hover:underline cursor-pointer"  onClick={() => {setOpen(false); scrollToSection("home")}}>Home</li>
          <li
            className="hover:underline cursor-pointer"
            onClick={() => {setOpen(false);scrollToSection("courses")}}
          >
            Courses
          </li>
         
          <li  className="hover:underline cursor-pointer" onClick={() => {setOpen(false);scrollToSection("aboutUs")}}>About us</li>
          <li  className="hover:underline cursor-pointer" onClick={() => {setOpen(false);scrollToSection("contactUs")}}>Contact us</li>
          <li  className="hover:underline cursor-pointer" onClick={() => {setOpen(false);scrollToSection("FAQ")}}>FAQ</li>
          <li className="bg-[#C28336] p-3 text-sm rounded-full hover:underline cursor-pointer"  onClick={() =>{setOpen(false); scrollToSection("courses")}}>
            Request For Demo Class
          </li>
        </ul>
        </div>
      </div>
 
  );
};

export default MobileDrawer;
