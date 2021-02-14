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
    removeFromBasket: (state, { payload }: PayloadAction<string>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id === payload
      );
      if (productIndex !== -1) {
        const product = state.products[productIndex];

        if (product.qty === 1) {
          state.products = state.products.filter((p) => p.id !== product.id);
        } else {
          state.products[productIndex].qty--;
        }
        state.productsInBasket--;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = accountSlice.actions;

export default accountSlice.reducer;
