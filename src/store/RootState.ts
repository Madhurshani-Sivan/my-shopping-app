import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./slices/categoriesReducer";
import productReducer from "./slices/productReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
