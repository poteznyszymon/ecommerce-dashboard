export interface Admin {
  id: number;
  username: string;
}

export interface User {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  country?: string;
  address?: string;
  city?: string;
  pinCode?: string;
  phoneNumber?: string;
  wishList?: Product[];
}

export interface Product {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  material: string;
  images: string[];
  color: string[];
  sizes: string[];
  gender: string;
  category: string;
  regularPrice: number;
  discountPrice?: number;
  totalOrders: number;
  wishlistedBy: User[];
}

export interface Order {
  id: number;
  user: User;
  userId: number;
  orderProducts: OrderProduct[];
  totalAmount: number;
  paymentIntentId: string;
  paymentStatus: string;
  orderStatus: string;
  shippingAddress?: string;
  city?: string;
  country?: string;
  pincode?: string;
  phoneNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderProduct {
  id: number;
  product: Product;
  productId: number;
  quantity: number;
  price: number;
  order: Order;
  orderId: number;
}

export interface Review {
  id: number;
  username: string;
  rating: number;
  text: string;
  createdAt: string;
  product: Product;
  productId: number;
}