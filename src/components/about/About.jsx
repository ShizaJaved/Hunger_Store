import React from 'react'
import top from "./top.svg"
import bottom from "./bottom.svg";
import { MdFastfood } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import blob from "./blob_1.png"
import about_img from "./about_img.png"


const About = () => {
  return (
    <div className="relative" id="about">
      {/* top waves */}
      <div >
        <img src={top} className="w-full h-full" />
      </div>

      <div className="w-screen h-[530px]  bg-[#EF4444] flex justify-around pt-5 ">
        <div className="w-[45%] pl-12 ">
          <h1 className="text-[25px] font-bold text-[#fff8f6]">
            Why to choose our <br />
            <span className="text-[45px] uppercase italic">happy meal!</span>
          </h1>
          <p className="text-[15px] text-[#efe3df] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            aliquid officia assumenda mollitia sit omnis vitae. At deleniti
            consequuntur esse, iusto nobis ex?
          </p>

          {/* component */}
          <div className="flex gap-6 items-center  text-[#fff8f6] mt-5">
            {/* circle */}
            <div className="bg-white h-14 rounded-full w-14 flex items-center justify-center text-red-400 text-[30px]">
              <MdFastfood />
            </div>

            {/* bottom of component */}
            <div className="w-[50%] flex flex-col mt-4  gap-1">
              <h1 className="text-[25px] font-bold ">Modern Innovation</h1>
              <p className="text-[15px] text-[#efe3df] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores labore numquam nulla.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-center text-[#fff8f6] ">
            {/* circle */}
            <div className="bg-white h-14 rounded-full w-14 flex items-center justify-center text-red-400 text-[30px]">
              <FaLeaf />
            </div>

            {/* bottom of component */}
            <div className="w-[50%] flex flex-col mt-4 gap-1">
              <h1 className="text-[25px] font-bold ">Organic Product</h1>
              <p className="text-[15px] text-[#efe3df] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Asperiores labore numquam nulla.
              </p>
            </div>
          </div>

          {/* left end */}
        </div>

        {/* right side */}
        <div className="w-[30%] relative">
          <div className='w-full -ml-20 mt-10'>
          <img src={blob} className=""/></div>
          <div className='w-[15px] h-[15px]'>
            <img src={about_img} className="absolute top-0 left-0  h-full drop-shadow-2xl" />
          </div>

        </div>
      </div>


{/* bottom waves */}
      <div className=''>
        <img src={bottom} className="h-full w-full" />
      </div>
    </div>
  );
}

export default About