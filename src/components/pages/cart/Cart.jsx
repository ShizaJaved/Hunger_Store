import React, { useState ,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
  inc_qty,
  dec_qty,
  remove,
  getCartTotal,
  clearCart,
} from "../../../redux/store/slice/CartSlice";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import empty from "./empty.png"

const Cart = () => {
  const dispatch = useDispatch()
    const products = useSelector((state)=> state.cart)
    console.log(products.data)
    const totalItem = useSelector((state)=> state.cart.totalItems)
    const totalAmount = useSelector((state) => state.cart.totalAmount);


const inc_Qty_handler=(product)=>{
  dispatch(inc_qty(product))
  
}

const dec_Qty_handler=(product)=>{
  dispatch(dec_qty(product))

}

const handleRemove = (product) =>{
  dispatch(remove(product));
}

const clearCartHanle = () =>{
  dispatch(clearCart())
}

useEffect(() => {
  dispatch(getCartTotal());
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [useSelector((state) => state.cart)]);

  return (
    <>
      <div className="bg-[#fff8f6] flex  gap-28 p-28">
        <div className="p-3 h-[450px] ">
          {products.data.length === 0 ? (
            <div >
              <div>
                <img src={empty} className="w-[500px] rounded-3xl shadow-md" />
              </div>
            </div>
          ) : (
            <>
              {products.data.map((product) => {
                return (
                  <>
                    <div
                      className="bg-white shadow-md

 p-4 flex rounded-2xl w-[550px] gap-4 h-[130px] m-2"
                    >
                      <div className="bg-white flex  justify-center flex-col gap-2 items-center  w-[200px] h-[100px]">
                        <div className="w-[60px] h-[60px] ">
                          <img src={product.img} className="h-full w-full " />
                        </div>
                        <div className=" -mb-2 p-1">
                          <h1 className="font-bold text-[13px]">
                            {product.name}
                          </h1>
                        </div>
                      </div>

                      <div className="bg-white flex items-center gap-6 p-3 text-nowrap ">
                        <div>
                          <h1 className="text-[18px] font-bold text-red-800">
                            Price : ${product.Price}
                          </h1>
                        </div>
                        <div className="flex gap-3 text-[17px] font-bold text-gray-600 items-center">
                          <button
                            className="hover:-translate-y-[0.5px]"
                            onClick={() => {
                              dec_Qty_handler(product);
                            }}
                          >
                            <CiSquareMinus />
                          </button>
                          <span>{product.quantity}</span>
                          <button
                            className="hover:-translate-y-[0.5px]"
                            onClick={() => {
                              inc_Qty_handler(product);
                            }}
                          >
                            <CiSquarePlus />
                          </button>
                        </div>
                        <div>
                          <span className="text-[13px] uppercase font-semibold text-gray-700">
                            sub total : ${product.totalPrice}
                          </span>
                        </div>

                        <button
                          className="text-red-700 hover:text-red-600"
                          onClick={() => {
                            handleRemove(product);
                          }}
                        >
                          <FaTrashCanArrowUp />
                        </button>
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>

        <div>
          <div className="bg-white h-[250px] w-[400px] p-3 m-4 rounded-xl shadow-md flex gap-10 flex-col relative">
            <div className="text-center bg-red-100 rounded-md uppercase font-bold tracking-[4px] text-gray-800">
              <h1>Order Summary</h1>
            </div>
            <div className="text-[20px] font-semibold uppercase text-gray-800">
              <h1> total items : {totalItem}</h1>
            </div>
            <div className="text-[20px] font-semibold uppercase text-gray-800">
              <h1>Grand Total : ${totalAmount}</h1>
            </div>

            <div className=" rounded-md p-2 w-[200px] text-center absolute -bottom-2 right-24 cursor-pointer hover:bg-red-500 transition ease-in  bg-red-700 text-white ">
              <h1>Proceed to checkout</h1>
            </div>
          </div>


{products.data.length >0 && <div className='mt-10 ml-40 p-3 text-[18px] bg-red-700 w-32 rounded-full text-center text-white font-bold hover:bg-red-500'>
 <button onClick={()=>{
  clearCartHanle()
 }}>Clear Cart</button>
</div>
}


        </div>

      </div>



    </>
  );
}

export default Cart