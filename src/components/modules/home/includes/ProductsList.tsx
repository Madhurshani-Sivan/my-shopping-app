import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Button, Col, Row, Spin } from "antd";

import ProductCard from "./includes/ProductCard";
import { RootState } from "../../../../store/RootState";
import { fetchProducts } from "../../../../store/slices/productReducer";
import { Product, ProductState } from "../../../../types/products";

import styles from "./ProductsList.module.css";

const ProductList: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { data, isLoading, error } = useSelector(
    (state: RootState) => state.products as ProductState
  );

  const products = Array.isArray(data) ? data : [data];

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
        {products.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6} xl={6}>
            <Link to={`/product/${product.id}`}>
              <ProductCard product={product as Product} />
            </Link>
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
        <Button
          disabled={currentPage == 7}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
