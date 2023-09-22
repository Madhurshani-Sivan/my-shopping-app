import { Action, ThunkAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../RootState";
import { listCategories } from "../actions/categoriesApi";

const initialState = { categories: [] };

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    fetchCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { fetchCategoriesSuccess } = categoriesSlice.actions;

export const fetchCategories =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  async (dispatch) => {
    try {
      const categories = await listCategories();
      dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
      console.log("Failed to fetch categories.....");
    }
  };

export default categoriesSlice.reducer;
