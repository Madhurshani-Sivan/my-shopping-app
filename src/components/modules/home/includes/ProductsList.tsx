import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productReducer";
import { Spin } from "antd";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/RootState";

const ProductList: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(1, 16));
  }, [dispatch]);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductList;
