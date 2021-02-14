import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState, ProductProps } from "../types";

export const initialState: BasketState = {
  productsInBasket: 0,
  products: [],
  steps: ["Check your order", "Set your address", "Finalize your order"],
  activeStep: 0
};

const basketSlice = createSlice({
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
    goNext: (state) => {
      if (state.activeStep + 1 < state.steps.length) {
        state.activeStep++;
      }
    },
    goBack: (state) => {
      if (state.activeStep - 1 >= 0) {
        state.activeStep--;
      }
    }

  },
});

export const { addToBasket, removeFromBasket, goBack, goNext } = basketSlice.actions;

export default basketSlice.reducer;
