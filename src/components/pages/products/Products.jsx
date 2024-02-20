import PopupModal from '../../popupModal/PopupModal';
import Card from '../../card/productCard/Card';
import React, { useState } from "react";
import burger from "./FoodList/burger1.png";
import drink from "./FoodList/drinks.png";
import fries from "./FoodList/fries.png";
import pizza from "./FoodList/pizza.png";
import wraps from "./FoodList/wraps.png";
import all from "./FoodList/all.png";
import { filterProducts } from "../../../redux/store/slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import About from '../../about/About';


const food = [
  {
    id: 1,
    name: "All Items",
    img: all,
    type: "",
  },
  {
    id: 2,
    name: "Burger",
    img: burger,
    type: "burger",
  },
  {
    id: 3,
    name: "Pizza",
    img: pizza,
    type: "pizza",
  },
  {
    id: 4,
    name: "Fries",
    img: fries,
    type: "fries",
  },
  {
    id: 5,
    name: "Wraps",
    img: wraps,
    type: "wraps",
  },
  {
    id: 6,
    name: "Drinks",
    img: drink,
    type: "drinks",
  },
];




const Products = () => {
const dispatch = useDispatch()
const [visible,setVisible] = useState(true)
const products = useSelector((state) => state.items.data);
const category = useSelector((state)=> state.items.category )
console.log(products)

const modalValue = useSelector((state)=>state.modal.modalValue)
console.log(modalValue)


const handleClick=(type)=>{
  setVisible(false)
  dispatch(filterProducts(type))
}

  return (
    <>
      {/* container  */}
      <div
        className="flex flex-col justify-center items-center p-10 pt-6"
        id="menu"
      >
        {/* navbar for products  */}
        <div className="flex gap-14  px-14 rounded-full py-2 bg-[#ffffff] shadow-md ">
          {food.map((item) => {
            return (
              <div
                className={`w-16 flex flex-col items-center font-medium cursor-pointer hover:shadow-2xl  text-[#cb1b1b] hover:text-[#991b1b] hover:rounded-xl
            hover:-translate-y-1 hover:scale-140
            transition-transform
            
            `}
                key={item.id}
                onClick={() => {
                  handleClick(item.type);
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[50px]
           "
                />
                <h2 className="-mt-1 text-[12px] ">{item.name}</h2>
              </div>
            );
          })}{" "}
        </div>

        {/* single product modal  */}
        {modalValue && <PopupModal />}

        {/* cards for items  */}

        <div className="flex gap-10 p-10  pt-0 mb-10 items-center justify-center flex-wrap overflow-y-scroll h-[540px] scrollbar scrollbar-thumb-red-700 scrollbar-w-2  scrollbar-thumb-rounded-full mt-10 m-24">
          {visible ? (
            products.map((product) => <Card product={product} />)
          ) : (
            <>
              {category.map((product) => (
                <Card product={product} />
              ))}
            </>
          )}
        </div>

        {/* about*/}

        <About />
      </div>
    </>
  );
}

export default Products