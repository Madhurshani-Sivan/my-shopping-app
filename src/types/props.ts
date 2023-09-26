import { Product } from "./products";

export interface ProductCardProps {
  product: Product;
}

export interface ProductGalleryProps {
  images: string[];
}

export interface ProductThumbnailProps {
  thumbnail: string;
  title: string;
}
