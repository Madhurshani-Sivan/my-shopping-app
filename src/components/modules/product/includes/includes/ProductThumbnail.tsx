import { FC } from "react";
import { ProductThumbnailProps } from "../../../../../types/props";

const ProductThumbnail: FC<ProductThumbnailProps> = ({ thumbnail, title }) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default ProductThumbnail;
