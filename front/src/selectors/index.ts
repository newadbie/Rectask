import { RootState } from "../types";

export const GetProducts = (state: RootState) => state.accountState.products;
export const GetBasketLength = (state: RootState) =>
  state.accountState.productsInBasket;
