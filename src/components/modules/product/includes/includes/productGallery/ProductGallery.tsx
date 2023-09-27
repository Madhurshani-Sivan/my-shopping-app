import { FC } from "react";
import { ProductGalleryProps } from "../../../../../../types/props";
import styles from "./ProductGallery.module.css";

const ProductGallery: FC<ProductGalleryProps> = ({
  images,
  thumbnail,
  title,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {images.map((url) => (
          <img src={url} alt={title} />
        ))}
      </div>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductGallery;
