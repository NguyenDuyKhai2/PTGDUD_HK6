import React from 'react';
import logo from "../assets/data/lab01/Group 9.png";
import avatar from "../assets/data/lab02/Avatar 35.png";
import Archivecheck from "../assets/data/lab02/Archive check.png";
const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-[80px] bg-white shadow-md mb-[100px] flex justify-between items-center px-5">
      <div className="mt-[5px]">
        <img src={logo} alt="Logo" className="w-[154px] h-[49px]" />
      </div>
      <div className="relative flex items-center">
        <img src={avatar} alt="Avatar" className="absolute left-4 w-[20px] h-[20px] fill-[#171a1f]" />
        <input
          type="text"
          className="w-[405px] h-[44px] pl-[44px] pr-4 text-[16px] leading-[26px] font-normal bg-[#aac2f3] rounded-[12px] border-none focus:outline-none focus:text-[#171a1f] focus:bg-white"
        />
      </div>

      <div className="flex justify-center items-center gap-5">
        <div className="text-[14px] font-normal text-[#565e6c] cursor-pointer py-[23px] px-[24px] hover:text-[#f44b87]">
          What to cook
        </div>
        <div className="text-[14px] font-normal text-[#565e6c] cursor-pointer py-[23px] px-[24px] hover:text-[#f44b87]">
          Recipes
        </div>
        <div className="text-[14px] font-normal text-[#565e6c] cursor-pointer py-[23px] px-[24px] hover:text-[#f44b87]">
          Ingredients
        </div>
        <div className="text-[14px] font-normal text-[#565e6c] cursor-pointer py-[23px] px-[24px] hover:text-[#f44b87]">
          Occasions
        </div>
        <div className="text-[14px] font-normal text-[#565e6c] cursor-pointer py-[23px] px-[24px] hover:text-[#f44b87]">
          About Us
        </div>
      </div>

      <button className="flex items-center justify-center h-[44px] px-4 text-[16px] font-normal bg-[#fef0f5] text-[#f44b87] rounded-[12px] cursor-pointer hover:bg-[#fddce8]">
        <img src={Archivecheck} alt="Archive" className="w-[20px] h-[20px] fill-[#f44b87] mr-2" />
        Your recipe box
      </button>

      <div className="w-[44px] h-[44px] rounded-full bg-[#fbc8da] flex items-center justify-center">
        <img src={avatar} alt="Avatar" className="w-[44px] h-[44px] rounded-full" />
      </div>
    </div>
  );
};

export default Header;
