import React from 'react'
import booking from "./booking.png"
import credit from "./credit.png";
import delivery from "./delivery.png";
import support from "./support.png";
import { Link } from 'react-router-dom';
const pro = [
  {
    h1: "Accept Card",
    img: credit,
    id:1,
  },
  {
    h1: "Online Order",
    img: booking,
    id:2,
  },
  {
    h1: "Free Delivery",
    img: delivery,
    id:3,
  },
  {
    h1: "Customer Support",
    img: support,
    id:4,
  },
];



const Contact = () => {
  return (
    <>

    <div className='flex flex-col pt-2' >
        
    <div className='flex justify-center' id='contact'>{
        pro.map((item)=>{
            return (
                <>   
               <div className='flex w-[250px] items-center justify-center h-[300px] flex-col gap-4 m-5 bg-white shadow-md rounded-xl cursor-pointer' key={item.id}>
    <div
    className='w-[150px]'>
    <img src={item.img} className='h-full w-full' key={item.id}/>
    </div>


    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[20px]
        font-bold
        '>{item.h1}</h1>
        <p className='font-light text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>

    </div>
    </>)}) }
</div>
</div>
 </>
  )
}

export default Contact