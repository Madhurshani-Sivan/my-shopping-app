import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productReducer";
import { Col, Row, Spin } from "antd";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/RootState";
import ProductCard from "./ProductCard";
import { Product, ProductState } from "../../../../types/products";

const ProductList: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products as ProductState
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
    <Row gutter={[16, 16]}>
      {data.map((product) => (
        <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
          <ProductCard product={product as Product} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
