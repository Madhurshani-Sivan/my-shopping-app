import { FC } from "react";
import styles from "./ProductDetails.module.css";
import { ProductGallery } from "./includes/ProductGallery";
import { ProductCardProps } from "../../../../types/props";
import { ProductThumbnail } from "./includes/ProductThumbnail";
import ProductDescription from "./includes/ProductDescription";

const ProductDetails: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productDetails}>
      <ProductGallery images={product.images} />
      <ProductThumbnail thumbnail={product.thumbnail} title={product.title} />
      <ProductDescription product={product} />
    </div>
  );
};

export default ProductDetails;
