import { RootState } from "../types";

export const GetProducts = (state: RootState) => state.basketState.products;
export const GetBasketLength = (state: RootState) =>
  state.basketState.productsInBasket;
