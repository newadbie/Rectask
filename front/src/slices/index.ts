import { combineReducers, Reducer } from "redux";
import { RootState } from "../types";

import accountState from "./accountSlice";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  accountState: accountState,
});

export default rootReducer
