import axios from "axios";

import {
  BASE_URL,
  PRODUCTS_BY_CATEGORY_ENDPOINT,
  PRODUCTS_ENDPOINT,
  PRODUCT_BY_KEYWORD_ENDPOINT,
} from "../../configs/http";

const api = axios.create({
  baseURL: BASE_URL,
});

export const listProducts = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  try {
    const response = await api.get(
      `${PRODUCTS_ENDPOINT}?limit=${limit}&skip=${skip}`
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const listProductsByCategory = async (
  category: string,
  page: number,
  limit: number
) => {
  const skip = (page - 1) * limit;
  try {
    const response = await api.get(
      `${PRODUCTS_BY_CATEGORY_ENDPOINT}/${category}?limit=${limit}&skip=${skip}`
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};

export const searchProductByKeyword = async (keyword: string) => {
  try {
    const response = await api.get(
      `${PRODUCT_BY_KEYWORD_ENDPOINT}?q=${keyword}`
    );
    return response.data.products;
  } catch (error) {
    console.log(error);
  }
};
