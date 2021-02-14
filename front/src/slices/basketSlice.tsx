import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasketState, ProductProps, PayData, ErrorProps } from "../types";

export const initialState: BasketState = {
  productsInBasket: 0,
  products: [],
  steps: [
    "Check your order",
    "Set your address",
    "Confirm your order",
    "Finalize",
  ],
  activeStep: 3,
  payData: {
    name: "",
    surname: "",
    zip_code: "",
    address: "",
  },
  error: undefined,
  isLoading: false,
  isFinalized: false,
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
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
    finalize: (state) => {
      state.isFinalized = true;
    },
    clearFinalize: (state) => {
      state.isFinalized = false;
    },
    setError: (state, { payload }: PayloadAction<ErrorProps>) => {
      state.error = payload;
    },
    clearError: (state) => {
      state.error = undefined;
    },
    removeFromBasket: (state, { payload }: PayloadAction<number>) => {
      const productIndex = state.products.findIndex(
        (product) => product.id.toString() === payload.toString()
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
    setPayData: (state, { payload }: PayloadAction<PayData>) => {
      console.log(payload);
      if (
        payload.address === "" ||
        payload.name === "" ||
        payload.surname === "" ||
        payload.zip_code === ""
      ) {
        throw new Error("Incorrect paydata!");
      }
      state.payData = payload;
    },
    resetBasket: (state) => {
      state.productsInBasket = 0;
      state.products = [];
      state.payData = {
        name: "",
        surname: "",
        zip_code: "",
        address: "",
      };
    },
    resetStepper: (state) => {
      state.activeStep = 0;
      state.payData = {
        name: "",
        surname: "",
        zip_code: "",
        address: "",
      };
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
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  goBack,
  goNext,
  setPayData,
  resetStepper,
  resetBasket,
  startLoading,
  stopLoading,
  setError,
  clearError,
  finalize,
  clearFinalize
} = basketSlice.actions;

export default basketSlice.reducer;
