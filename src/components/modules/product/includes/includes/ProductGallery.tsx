import { FC } from "react";
import { ProductGalleryProps } from "../../../../../types/props";

export const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div>
      {images.map((url) => (
        <img src={url} />
      ))}
    </div>
  );
};
