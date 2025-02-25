import React from "react";
import logo from "../assets/Logo.png";
import circle from "../assets/halfCircle.png";
import sImage from "../assets/SImage.png";

const Footer: React.FC = () => {
  return (
    <div className="bg-white text-black flex justify-center items-center w-full relative">
      <div className="w-full px-6 py-12 md:px-52 md:py-52 flex flex-col justify-between items-start gap-10 md:gap-20">
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Supreme Group Logo"
            className="h-12 cursor-pointer"
          />
        </div>

        <div className="w-full grid grid-cols-2 md:flex md:justify-between gap-8">
          <div className="space-y-4">
            <h3 className="font-bold mb-3">APPLICATIONS</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-black">Apparel</li>
              <li className="cursor-pointer hover:text-black">Automotive</li>
              <li className="cursor-pointer hover:text-black">Filtration</li>
              <li className="cursor-pointer hover:text-black">Customized Solutions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold mb-3">COMPANY</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-black">Innovation</li>
              <li className="cursor-pointer hover:text-black">Global Competency</li>
              <li className="cursor-pointer hover:text-black">About Us</li>
              <li className="cursor-pointer hover:text-black">Contact Us</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold mb-3">MORE</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-black">Careers</li>
              <li className="cursor-pointer hover:text-black">Privacy Policy</li>
              <li className="cursor-pointer hover:text-black">Terms and Conditions</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold mb-3">FOLLOW US</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="cursor-pointer hover:text-black">Twitter</li>
              <li className="cursor-pointer hover:text-black">LinkedIn</li>
              <li className="cursor-pointer hover:text-black">Instagram</li>
              <li className="cursor-pointer hover:text-black">Medium</li>
            </ul>
          </div>
        </div>

        <div className="w-full text-black text-sm text-center flex flex-col md:flex-row justify-between">
          <div>©2025. All Rights Reserved.</div>
          <div>Supreme House: 110, 16th Road, Chembur, Mumbai - 400071.</div>
        </div>
      </div>

      <img
        src={circle}
        alt="circle"
        className="absolute bottom-0 right-0 w-24 md:w-auto"
      />
      <img
        src={sImage}
        alt="SIcon"
        className="absolute bottom-0 right-10 w-16 md:w-auto"
      />
    </div>
  );
};

export default Footer;
