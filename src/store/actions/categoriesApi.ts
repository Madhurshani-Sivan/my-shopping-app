import axios from "axios";
import { BASE_URL, CATEGORIES_ENDPOINT } from "../../configs/http";

const api = axios.create({
  baseURL: BASE_URL,
});

export const listCategories = async () => {
  try {
    const response = await api.get(CATEGORIES_ENDPOINT);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
