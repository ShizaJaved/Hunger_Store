import React, { useEffect, useState } from "react";
import { setModalData,setModalValue } from "../../../redux/store/slice/ModalSlice";
import {  useDispatch } from "react-redux";




const Card = ({product}) => {

  const numb = product.ratings;
 const [star,setStar] = useState([])
 const dispatch = useDispatch()


 
useEffect(()=>{
const stars = [];
  for (let i = 0; i < numb; i++) {
    stars.push(<span key={i}>⭐</span>);
      setStar(stars);
  }
  console.log(stars)

},[])
  const handleModal = (data)=>{
dispatch(setModalData(data))
dispatch(setModalValue(true))
  }



  return (
    <>
      <div
        className="w-[230px] border-2 h-[220px] flex flex-col gap-6 justify-center items-center p-3 mt-5 box-content cursor-pointer bg-white shadow-md rounded-2xl "
        onClick={() => {
          handleModal(product);
        }}
      >
        <div className="flex items-center justify-center w-[130px] h-[110px] object-auto ">
          <img src={product.img} className="h-[100%] w-[100%] drop-shadow-xl" />
        </div>

        <div className=" flex flex-col  p-1 w-full leading-8">
          <div>
            <p className="text-[22px] font-overall font-bold text-red-900 uppercase">
              {product.name}
            </p>
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-1">{star}</div>

            <div>
              <p className="text-[25px] text-red-600 font-semibold">
                ${product.Price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
