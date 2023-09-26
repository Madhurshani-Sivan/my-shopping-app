import { FC } from "react";
import { Card } from "antd";
import { ShoppingTwoTone } from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

import styles from "./ProductCard.module.css";
import { ProductCardProps } from "../../../../../types/props";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const inStock = product.stock > 0;
  const price = "$" + product.price;

  return (
    <Card
      className={styles.card}
      hoverable
      cover={
        <img
          alt={product.title}
          src={product.thumbnail}
          className={styles.image}
        />
      }
    >
      <Meta
        title={product.title}
        description={price}
        avatar={
          <ShoppingTwoTone twoToneColor={inStock ? "#029fae" : "black"} />
        }
      />
    </Card>
  );
};

export default ProductCard;
