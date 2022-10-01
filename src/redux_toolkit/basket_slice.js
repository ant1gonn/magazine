import { createSlice } from "@reduxjs/toolkit";
import { getTotalPrice } from "../utilits/getTotalPrice";

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasketProduct(state, action) {
      const newProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (newProduct) {
        newProduct.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.items);
    },
    deleteBasketProduct(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearBasket(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    minusBasketProduct(state, action) {
      const minusItem = state.items.find((obj) => obj.id === action.payload.id);
      if (minusItem) minusItem.count--;
      state.totalPrice = getTotalPrice(state.items);
    },
  },
});

export const {
  addBasketProduct,
  deleteBasketProduct,
  clearBasket,
  plusBasketProduct,
  minusBasketProduct,
} = basketSlice.actions;

export default basketSlice.reducer;
