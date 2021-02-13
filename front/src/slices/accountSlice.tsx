import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountState, Product } from "../types";

export const initialState: AccountState = {
  products: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<Product>) => {
      const productId = state.products.findIndex(
        (product) => product.id === payload.id
      );
    },
  },
});

export const { addToBasket } = accountSlice.actions;

export default accountSlice.reducer;
