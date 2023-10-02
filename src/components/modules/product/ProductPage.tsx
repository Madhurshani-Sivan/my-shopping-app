import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Spin } from "antd";

import ProductDetails from "./includes/ProductDetails";
import { RootState } from "../../../store/RootState";
import { fetchProductById } from "../../../store/slices/productReducer";
import { ProductState } from "../../../types/products";
import { ProductPageParams } from "../../../types/routes";

const ProductPage: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products as ProductState
  );

  const product = Array.isArray(data) ? data[0] : data;
  console.log(product);

  const { productId } = useParams<ProductPageParams>();

  useEffect(() => {
    if (productId !== undefined) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return <ProductDetails product={product} />;
};

export default ProductPage;
