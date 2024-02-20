import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="h-[100px] flex justify-between p-10 px-28 gap-96 border-t-2 mt-7">
      <div className="flex gap-10 items-center text-nowrap text-[#EF4444]">
        <h1 className="font-bold text-[35px]">Contact Us</h1>
        <div className="flex gap-5 items-center cursor-pointer text-[25px]">
          <span className="hover:text-red-800">
            <FaFacebook />
          </span>

          <span className="hover:text-red-800">
            <RiInstagramFill />
          </span>
          <span className="hover:text-red-800">
            <FaSquareXTwitter />
          </span>
        </div>
      </div>

      <div>
        <h1 className="text-[15px] ">
          Mozilla/5.0 (Macintosh; PPC Mac OS X 10_5_8) AppleWebKit/537.2 (KHTML,
          like Gecko) 
        </h1>
      </div>
    </div>
  );
}

export default Footer