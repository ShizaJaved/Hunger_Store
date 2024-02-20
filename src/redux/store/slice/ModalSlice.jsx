import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    modalValue: false,
    totalAmount:0,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalData(state, action) {
  state.data = []
      state.data.push( action.payload);
    },
    setModalValue(state, action) {
      state.modalValue = action.payload;
    },
   
  },
});


export const {setModalData,setModalValue, incr_modal_data_Qty,dec_modal_data_Qty} = modalSlice.actions
export default modalSlice.reducer