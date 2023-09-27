import { FC } from "react";
import { ProductThumbnailProps } from "../../../../../types/props";
import styles from "./ProductThumbnail.module.css";

const ProductThumbnail: FC<ProductThumbnailProps> = ({ thumbnail, title }) => {
  return (
    <div className={styles.thumbnail}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ProductThumbnail;
