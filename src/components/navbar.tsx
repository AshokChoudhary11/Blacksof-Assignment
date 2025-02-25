import React from "react";
import logo from "../assets/Logo.png";
import Linkedin from "../assets/linkedin.svg"
import translate from "../assets/translate.svg"

interface NavbarProps {
  contactFormRef: React.RefObject<HTMLDivElement>;
}

const Navbar: React.FC<NavbarProps> = ({ contactFormRef }) => {
  const handleScrollToContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

      // Delay focus slightly to ensure it's in view
      setTimeout(() => {
        const input = contactFormRef.current?.querySelector("input, textarea");
        if (input) (input as HTMLElement).focus();
      }, 500);
    }
  };
  return (
    <nav className="flex items-center justify-between h-20 px-[134px] py-2 m-0 bg-white shadow">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Supreme Group Logo" className="w-[146px] h-[41px] cursor-pointer" />
      </div>

      <div className="flex items-center space-x-4  gap-[40]">
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
            <img src={translate} alt="linkedin" className="w-5 h-5" />
            <span className="text-black text-xs">ENG</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
