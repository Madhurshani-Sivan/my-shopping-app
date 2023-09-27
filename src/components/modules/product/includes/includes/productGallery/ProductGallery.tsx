import { FC, useState } from "react";
import { ProductGalleryProps } from "../../../../../../types/props";
import styles from "./ProductGallery.module.css";

const ProductGallery: FC<ProductGalleryProps> = ({
  images,
  thumbnail,
  title,
}) => {
  const [selectedImage, setSelectedImage] = useState(thumbnail);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {images.map((url) => (
          <img
            key={url}
            src={url}
            alt={title}
            className={selectedImage === url ? styles.selected : ""}
            onClick={() => handleImageClick(url)}
          />
        ))}
      </div>
      <div className={styles.thumbnail}>
        <img src={selectedImage} alt={title} />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default ProductGallery;
