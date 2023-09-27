import { Button } from "antd";
import { FC, useState } from "react";
import { ProductCardProps } from "../../../../../../types/props";
import StarRating from "./includes/StarRating";
import styles from "./ProductDescription.module.css";

const ProductDescription: FC<ProductCardProps> = ({ product }) => {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.container}>
      <div>
        <p>
          <b>Brand: </b>
          {product.brand}
        </p>
        <p>
          <b>Availability: </b>
          {product.stock > 0
            ? `Only ${product.stock} in Stock`
            : "Not Available"}
        </p>
        <h1>{product.title}</h1>
        <StarRating rating={product.rating} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div>
        <div>
          <p>USD(incl. of all taxes):</p>
          <div className={styles.price}>
            <h3>
              $
              {product.price -
                (product.discountPercentage / 100) * product.price}
            </h3>
            <h4>${product.price}</h4>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.counter}>
            <Button onClick={() => setCount(count + 1)}>+</Button>
            <Button>{count}</Button>
            <Button onClick={() => setCount(count - 1)}>-</Button>
          </div>
          <div>
            <Button className={styles.buyNow}>Buy Now</Button>
            <Button className={styles.addToCart}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
