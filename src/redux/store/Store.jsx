import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slice/ProductSlice"
import modalReducer from "./slice/ModalSlice"
import cartReducer from "./slice/CartSlice"

const Store = configureStore({
    reducer:{
items: productReducer,
modal: modalReducer,
cart: cartReducer,
    }
});


export default Store