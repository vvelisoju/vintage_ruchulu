export interface ProductQuantity {
  weight: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  quantities: ProductQuantity[];
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  category: "pickles" | "sweets" | "hots";
  image: string;
  ingredients: string[];
  shelfLife: string;
  inStock: boolean;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedWeight: string;
  selectedPrice: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address?: string;
  notes?: string;
  state?: string;
  deliveryType?: "ap-telangana" | "other-international";
}

export interface Cart {
  items: CartItem[];
  total: number;
  deliveryCharge?: number;
  grandTotal?: number;
}

export interface DeliveryInfo {
  type: "ap-telangana" | "other-international";
  chargePerKg: number;
  description: string;
}