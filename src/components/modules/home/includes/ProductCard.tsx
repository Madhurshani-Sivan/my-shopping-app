import { ShoppingTwoTone } from "@ant-design/icons";
import { Card } from "antd";
import { FC } from "react";
import styles from "./ProductCard.module.css";
import Meta from "antd/es/card/Meta";
import { ProductCardProps } from "../../../../types/products";

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
