import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./slices/categoriesReducer";
import productReducer from "./slices/productReducer";
import cartReducer from "./slices/cartReducer";

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
