
export enum OrderStatus {
  PENDING = 'Pending',
  PREPARING = 'Preparing',
  READY = 'Ready',
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled'
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Pizza' | 'Burger' | 'Sandwich' | 'Momos' | 'Rice items' | 'Chicken starters' | 'Maggie' | 'Veg starters' | 'Egg items';
  image: string;
  isPopular?: boolean;
}

export interface CartItem extends FoodItem {
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: number;
  address: string;
}

export interface User {
  role: 'customer' | 'admin';
  name: string;
}
