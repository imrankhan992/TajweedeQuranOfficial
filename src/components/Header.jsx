import React from "react";
import MobileDrawer from "./Drawer/MobileDrawer";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="absolute w-full !z-50">
      <div className="w-full hidden md:block">
        <ul className="text-white font-bold text-lg flex items-center justify-end gap-10 py-10 pr-20">
          <li className="hover:underline cursor-pointer">Home</li>
          <li
            className="hover:underline cursor-pointer"
            onClick={() => scrollToSection("courses")}
          >
            Courses
          </li>
          
          <li  className="hover:underline cursor-pointer" onClick={() => scrollToSection("aboutUs")}>About us</li>
          <li  className="hover:underline cursor-pointer" onClick={() => scrollToSection("contactUs")}>Contact us</li>
          <li  className="hover:underline cursor-pointer" onClick={() => scrollToSection("FAQ")}>FAQ</li>
          <li className="bg-[#C28336] p-3 rounded-full hover:underline cursor-pointer"  onClick={() => scrollToSection("courses")}>
            Request For Demo Class
          </li>
        </ul>
      </div>
        <MobileDrawer/>
    </div>
  );
};

export default Header;
