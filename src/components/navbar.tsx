import React, { useState } from "react";
import logo from "../assets/Logo.png";
import Linkedin from "../assets/linkedin.svg";
import translate from "../assets/translate.svg";
import { IoMenu, IoClose } from "react-icons/io5"; // Importing icons

interface NavbarProps {
  contactFormRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ contactFormRef }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollToContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        const input = contactFormRef.current?.querySelector("input, textarea");
        if (input) (input as HTMLElement).focus();
      }, 500);
    }
  };

  return (
    <nav className="bg-white shadow w-full fixed top-0 z-50">
      <div className="flex justify-between items-center px-6 md:px-10 lg:px-[134px] h-16">
        {/* Logo */}
        <img src={logo} alt="Supreme Group Logo" className="w-[120px] md:w-[146px] h-auto cursor-pointer" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            className="px-4 py-1.5 rounded-full text-black bg-[#5CD6FF] cursor-pointer"
            onClick={handleScrollToContact}
          >
            Contact Us
          </button>
          <a href="https://www.linkedin.com/company/blacksof/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
          </a>
          <div className="flex items-center space-x-1 cursor-pointer">
            <img src={translate} alt="Translate" className="w-5 h-5" />
            <span className="text-black text-xs">ENG</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4 space-y-4">
          <button
            className="px-4 py-2 rounded-full text-black bg-[#5CD6FF] cursor-pointer w-3/4 text-center"
            onClick={() => {
              handleScrollToContact();
              setIsOpen(false);
            }}
          >
            Contact Us
          </button>
          <a
            href="https://www.linkedin.com/company/blacksof/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <img src={Linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer" />
            <span className="text-black">LinkedIn</span>
          </a>
          <div className="flex items-center space-x-1 cursor-pointer">
            <img src={translate} alt="Translate" className="w-5 h-5" />
            <span className="text-black text-xs">ENG</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
