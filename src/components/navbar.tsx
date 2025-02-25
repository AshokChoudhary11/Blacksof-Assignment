import React from "react";
import logo from "../assets/Logo.png";
import Linkedin from "../assets/linkedin.svg"
import translate from "../assets/translate.svg"

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between h-20 px-[134px] py-2 m-0 bg-white shadow">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Supreme Group Logo" className="w-[146px] h-[41px] cursor-pointer" />
      </div>

      <div className="flex items-center space-x-4  gap-[40]">
      <button
          className="px-4 py-1.5 rounded-full text-black bg-[#5CD6FF] cursor-pointer"
        >
          Contact Us
        </button>
        <img src={Linkedin} alt="linkedin" className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center space-x-1 cursor-pointer">
            <img src={translate} alt="linkedin" className="w-5 h-5" />
            <span className="text-black text-xs">ENG</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
