import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../RootState";
import {
  listProducts,
  listProductsByCategory,
  searchProductByKeyword,
} from "../actions/productsApi";
import { ProductState } from "../../types/products";

const initialState: ProductState = { data: [], isLoading: false, error: null };

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.isLoading = true;
    },
    fetchProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
} = productsSlice.actions;

export const fetchProducts =
  (
    page: number,
    limit: number
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const products = await listProducts(page, limit);
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure("Failed to fetch products....."));
    }
  };

export const fetchProductsByCategory =
  (
    category: string,
    page: number,
    limit: number
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const products = await listProductsByCategory(category, page, limit);
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure("Failed to fetch products....."));
    }
  };

export const fetchProductByKeyword =
  (keyword: string): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const products = await searchProductByKeyword(keyword);
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure("Failed to fetch products....."));
    }
  };

export default productsSlice.reducer;
