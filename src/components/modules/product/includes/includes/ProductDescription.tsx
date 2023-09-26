import { Button } from "antd";
import { FC } from "react";
import { ProductCardProps } from "../../../../../types/props";

const ProductDescription: FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <div>
        <p>Brand: {product.brand}</p>
        <p>
          {product.stock > 0
            ? `Only ${product.stock} in Stock`
            : "Not Available"}
        </p>
      </div>
      <div>
        <h3>{product.title}</h3>
        <p>Rating: {product.rating}</p>
      </div>
      <div>
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
        <p>USD(incl. of all taxes):</p>
        <h5>
          {product.price - (product.discountPercentage / 100) * product.price}
        </h5>
        <h6>{product.price}</h6>
      </div>
      <div>
        <Button>+</Button>
        <Button>1</Button>
        <Button>-</Button>
      </div>
      <div>
        <Button>Buy Now</Button>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductDescription;
