import { Product } from "./products";

export interface ProductCardProps {
  product: Product;
}

export interface ProductGalleryProps {
  images: string[];
  thumbnail: string;
  title: string;
}

export interface StarRatingProps {
  rating: number;
}
