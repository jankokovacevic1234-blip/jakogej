export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'accounts' | 'subscriptions' | 'addons';
  image_url: string;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  order_code: string;
  items: CartItem[];
  total_amount: number;
  customer_email: string;
  status: 'pending' | 'completed' | 'cancelled';
  created_at: string;
}

export interface DiscountCode {
  id: string;
  code: string;
  discount_percentage: number;
  is_active: boolean;
  created_at: string;
}