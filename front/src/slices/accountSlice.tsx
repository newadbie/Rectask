import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountState, ProductProps } from "../types";

export const initialState: AccountState = {
  productsInBasket: 0,
  products: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<ProductProps>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === payload.id
      );
      if (productIndex === -1) {
        state.products = [...state.products, { ...payload, qty: 1 }];
      } else {
        state.products[productIndex].qty += 1;
      }
      state.productsInBasket = state.productsInBasket + 1;
    },
  },
});

export const { addToBasket } = accountSlice.actions;

export default accountSlice.reducer;
