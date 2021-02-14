import { RootState } from "../types";

export const GetProducts = (state: RootState) => state.basketState.products;
export const GetBasketLength = (state: RootState) =>
  state.basketState.productsInBasket;

export const GetActiveStep = (state: RootState) => state.basketState.activeStep;
export const GetStepsContent = (state: RootState) => state.basketState.steps;