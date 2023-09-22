import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/slices/productReducer";
import { Button, Col, Row, Spin } from "antd";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../../../../store/RootState";
import ProductCard from "./ProductCard";
import { Product, ProductState } from "../../../../types/products";
import styles from "./ProductsList.module.css";

const ProductList: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products as ProductState
  );

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts(currentPage, 16));
  }, [dispatch, currentPage]);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <Row gutter={[16, 16]}>
        {data.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
            <ProductCard product={product as Product} />
          </Col>
        ))}
      </Row>
      <div className={styles.pagination}>
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </Button>
        <p className={styles.page}>{currentPage}</p>
        <Button onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
