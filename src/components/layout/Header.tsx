import {
  CheckOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.css";
import logo from "./assets/logo.png";
import { Button, Input, Select } from "antd";
import { FC } from "react";
import { Option } from "antd/es/mentions";

const Header: FC = () => {
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
        <Select<string> defaultValue="all">
          <Option value="all"> All Categories</Option>,
          <Option value="1"> 1</Option>,<Option value="2"> 2</Option>,
        </Select>
        <Input placeholder="Search here" />
        <Button className={styles.searchButton}>Search</Button>
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
