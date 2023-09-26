import { FC } from "react";
import { ProductThumbnailProps } from "../../../../../types/props";

export const ProductThumbnail: FC<ProductThumbnailProps> = ({
  thumbnail,
  title,
}) => {
  return (
    <div>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
    </div>
  );
};
