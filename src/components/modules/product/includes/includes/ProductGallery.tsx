import { FC } from "react";
import { ProductGalleryProps } from "../../../../../types/props";
import styles from "./ProductGallery.module.css";

const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((url) => (
        <img src={url} />
      ))}
    </div>
  );
};

export default ProductGallery;
