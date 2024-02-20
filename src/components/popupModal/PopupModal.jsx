import React, { useEffect, useState } from 'react'
import { setModalValue } from '../../redux/store/slice/ModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from "../../redux/store/slice/CartSlice";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { MdCancel } from "react-icons/md";


const popupModal = () => {
const products = useSelector((state)=> state.modal.data)
console.log(products)
const [value,setValue] = useState(1)
const dispatch = useDispatch()


useEffect(()=>{
  document.body.style.overflowY = "hidden";
  return()=>{
    document.body.style.overflowY = "scroll";
  }
},[])
    const handleModal=(data)=>{
dispatch(setModalValue(data))
    }


    const handle_dec_Qty = () =>{
        if(value > 1){
          setValue((pre)=>{
            let newQ = pre -1;
            return newQ;
          })

        }

    }

 const handle_inc_Qty = (product) => {
   console.log(product);
     setValue((pre) => {
       let newQ = pre + 1;
       return newQ;
     });
 };

 const handleCart=(product)=>{
  console.log("added")
  let totalPrice = value * product.Price
  let newPro = {
    ...product,
    quantity:value,
    totalPrice,
  }
  console.log(newPro)
  dispatch(Add(newPro))
 }

  return (
    <>
      <div className="h-screen w-screen top-0 left-0 right-0 bottom-0 z-20 fixed flex items-center justify-center ">
        <div
          className="w-full h-full fixed top-0 left-0 right-0 bottom-0 opacity-[90%] bg-[#fff8f6]"
          onClick={() => {
            handleModal(false);
          }}
        ></div>
        <div className="absolute flex w-[550px] bg-white h-[300px] justify-between rounded-3xl p-10 gap-3 shadow-xl ">
          <div
            className="absolute z-10 -top-2 -right-1 rounded-full  text-red-700 cursor-pointer text-[45px] hover:text-[47px] transition hover:text-red-500 ease-in	"
            onClick={() => {
              handleModal(false);
            }}
          >
            <MdCancel />
          </div>
          {products.map((product) => {
            return (
              <>
                <div className="shadow-lg flex p-5 justify-center flex-col gap-2 rounded-2xl ">
                  <div className="w-[150px] h-[130px] ">
                    <img
                      src={product.img}
                      alt=""
                      className="w-[100%] h-[100%]"
                    />
                  </div>
                  <div className="-mb-2">
                    <h1 className="text-[20px] font-bold text-red-700">
                      {product.name}
                    </h1>
                  </div>
                </div>

                <div className=" flex-grow p-4 leading-[70px]">
                  <h1 className="text-[25px] font-bold text-red-800">
                    Price : ${product.Price}
                  </h1>

                  <div className="flex gap-4 text-[23px] font-bold text-gray-700 items-center">
                    <button
                      className="text-[30px] hover:-translate-y-[0.5px] transition hover:text-[30.5px] ease-in-out"
                      onClick={() => {
                        handle_dec_Qty(product);
                      }}
                    >
                      <CiSquareMinus />
                    </button>
                    <span>{value}</span>
                    <button
                      className="text-[30px] hover:-translate-y-[0.5px] hover:text-[32px] transition ease-in-out"
                      onClick={() => {
                        handle_inc_Qty(product);
                      }}
                    >
                      <CiSquarePlus />
                    </button>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-bold text-gray-600">
                      sub total : ${product.Price * value}
                    </h1>
                  </div>

                  <button
                    className="w-[140px] bg-red-700 h-10 flex items-center justify-center rounded-full hover:bg-red-600 transition ease-in"
                    onClick={() => {
                      handleCart(product);
                    }}
                  >
                    <h1 className="text-white ">Add to cart</h1>
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
 
export default popupModal