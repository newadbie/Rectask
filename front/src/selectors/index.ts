import { RootState } from "../types";

export const GetProducts = (state: RootState) => state.accountState.products;
