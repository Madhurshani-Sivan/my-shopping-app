import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { listProducts } from "../actions/productsApi";
import { RootState } from "../RootState";

const productsSlice = createSlice({
  name: "products",
  initialState: { data: [], isLoading: false, error: null },
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

export default productsSlice.reducer;
