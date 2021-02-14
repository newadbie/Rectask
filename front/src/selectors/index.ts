import { RootState } from "../types";

export const GetProducts = (state: RootState) => state.basketState.products;
export const GetBasketLength = (state: RootState) =>
  state.basketState.productsInBasket;

export const GetPayData = (state: RootState) => state.basketState.payData;

export const GetActiveStep = (state: RootState) => state.basketState.activeStep;
export const GetStepsContent = (state: RootState) => state.basketState.steps;
