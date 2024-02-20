import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../../../productsData";




const initialState ={
    data: productsData,
    category:[],
}

const productSlice = createSlice({
    name:"items",
    initialState,
    reducers:{
        filterProducts(state,action){
            let draft = state.data.filter((item)=>item.type===action.payload)

            if(draft.length>0){
                state.category = draft
            } 
            else {
                state.category = productsData
            }
        },
    }
})

export const {filterProducts} = productSlice.actions

export default productSlice.reducer