
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  data: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add(state, action) {
      let findItem = state.data.find((item) => item.id === action.payload.id);
      console.log("received", action.payload);
      if (findItem) {
        let draft = state.data.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + 1;
            let tempTotalPrice = tempQty + item.Price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        return {
          ...state,
          data: draft,
        };
      } else {
        state.data.push(action.payload);
      }
    },
    remove(state, action) {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
    inc_qty(state, action) {
      let draft = state.data.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity + 1;
          let tempTotalPrice = tempQty * item.Price;
          return {
            ...item,
            quantity: tempQty,
            totalPrice: tempTotalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: draft,
      };
    },
    dec_qty(state, action) {
      let draft = state.data.map((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 0) {
            let tempQty = item.quantity - 1;
            let tempTotalPrice = tempQty * item.Price;
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          }
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: draft,
      };
    },
    getCartTotal(state) {
      state.totalItems = state.data.length;
      const totalAmount = state.data.reduce(
        (acc, item) => acc + item.totalPrice,
        0
      );
      state.totalAmount = totalAmount;
    },
    clearCart(state){
      state.data = [];
    }
  },
});

export const { remove, Add, inc_qty, dec_qty, getCartTotal, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer