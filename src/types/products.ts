export interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: String[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export interface ProductState {
  data: Product[];
  isLoading: Boolean;
  error: string | null;
}

export interface ProductCardProps {
  product: Product;
}
