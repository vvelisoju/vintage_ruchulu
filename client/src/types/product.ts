export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  category: string;
  image: string;
  ingredients: string[];
  shelfLife: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address?: string;
  notes?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
