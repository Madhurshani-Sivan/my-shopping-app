import {
  CheckOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.css";
import logo from "./assets/logo.png";
import { Button, Input, Select } from "antd";

export const Header = () => {
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
        <Select
          defaultValue="all"
          options={[
            { value: "all", label: "All Categories" },
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
          ]}
        />
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
