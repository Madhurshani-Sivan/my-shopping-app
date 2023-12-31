import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

import { Button, Input, Select } from "antd";
import {
  CheckOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Option } from "antd/es/mentions";

import { RootState } from "../../store/RootState";
import { fetchCategories } from "../../store/slices/categoriesReducer";
import {
  fetchProductByKeyword,
  fetchProducts,
  fetchProductsByCategory,
} from "../../store/slices/productReducer";
import { CategoryState } from "../../types/categories";

import styles from "./Header.module.css";
import logo from "./assets/logo.png";

const Header: FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, AnyAction>>();
  const { categories } = useSelector(
    (state: RootState) => state.categories as CategoryState
  );

  const [searchKeyword, setSearchKeyword] = useState<string>("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategorySelection = (value: string) => {
    if (value == "all") {
      dispatch(fetchProducts(1, 16));
    } else {
      dispatch(fetchProductsByCategory(value, 1, 16));
    }
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleProductSearch = () => {
    dispatch(fetchProductByKeyword(searchKeyword));
  };

  return (
    <header>
      <div className={styles.notice}>
        <CheckOutlined className={styles.checkIcon} />
        <p>Free Shipping On All Orders Over $50</p>
      </div>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>Comforty</p>
        </div>
        <Select<string> defaultValue="all" onChange={handleCategorySelection}>
          <Option value="all"> All Categories</Option>
          {categories.map((category) => (
            <Option key={category} value={category}>
              {category}
            </Option>
          ))}
        </Select>
        <Input
          placeholder="Search here"
          value={searchKeyword}
          onChange={handleSearchInputChange}
        />
        <Button className={styles.searchButton} onClick={handleProductSearch}>
          Search
        </Button>
        <Button className={styles.cartButton}>
          <ShoppingCartOutlined />
          Cart &nbsp;
          <span className={styles.cartCount}>2</span>
        </Button>
        <Button>
          <UserOutlined />
        </Button>
      </div>
    </header>
  );
};

export default Header;
