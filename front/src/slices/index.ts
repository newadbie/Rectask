import { combineReducers, Reducer } from "redux";
import { RootState } from "../types";

import basketState from "./basketSlice";

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  basketState: basketState,
});

export default rootReducer
