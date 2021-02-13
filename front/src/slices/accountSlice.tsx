import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AccountState, ProductProps } from "../types";

export const initialState: AccountState = {
  products: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addToBasket: (state, { payload }: PayloadAction<ProductProps>) => {
      const productId = state.products.findIndex(
        (product) => product.id === payload.id
      );
    },
  },
});

export const { addToBasket } = accountSlice.actions;

export default accountSlice.reducer;
