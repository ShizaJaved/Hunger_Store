import React from 'react'
import home from "./home.png"
import store from "./name.png"
import Button from "../../button/Button"
import Products from '../products/Products'
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <>
       {/* main div that is containing all of the home   */}

       <div className="pt-20 "> 

         <div className="flex items-center flex-col relative ">
          <div className="w-[60%] -mt-[110px] opacity-50">
            <img src={store} alt="" className="w-[100%]" />
          </div>

          <div className="absolute mt-20 size-[50%] -ml-30 drop-shadow-lg ">
            <img src={home} alt="" />
          </div>
        </div>

        <div
          className="flex justify-center
        mt-16 gap-10
        "
        >
          <Button
            value="Order Now"
            to="
         bg-[#dc2626]"
            from="bg-[#991b1b]"
            textColor="white"
          />
          <Button
            value="View Menu"
            color="transparent"
            borderColor="border-[#dc2626]"
          />
        </div>
      </div> 
      
      
      <Products />
      <Contact /> 
    </>
  );
}

export default Home