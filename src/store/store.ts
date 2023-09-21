import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productReducer";
import categoriesReducer from "./slices/categoriesReducer";
import cartReducer from "./slices/cartReducer";

const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});

export default store;
