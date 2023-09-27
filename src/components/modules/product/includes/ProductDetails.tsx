import { FC } from "react";
import styles from "./ProductDetails.module.css";
import { ProductCardProps } from "../../../../types/props";
import ProductDescription from "./includes/productDescription/ProductDescription";
import ProductGallery from "./includes/productGallery/ProductGallery";

const ProductDetails: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productDetails}>
      <ProductGallery
        images={product.images}
        thumbnail={product.thumbnail}
        title={product.title}
      />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductDetails;
