import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/ordered"
      );
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsordered = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/ordered"
      );
   
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});


export const { post } = productsordered; 
export const { usetest } = productsFetch; 
export default productsSlice.reducer;
