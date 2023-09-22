import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productReducer";
import categoriesReducer from "./slices/categoriesReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
