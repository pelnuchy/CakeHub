export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  flavor: string;
  quantity: number;
  message: string;
  image: string;
  total_price: number;
}

export interface Cake {
  cakeID: string;
  cakeName: string;
  size?: number;
  jamFilling?: string;
  price?: number;
  img_url?: string;
  cakeType?: 'gato' | 'corn cream';
  occasion: 'custom' | 'birthday' | 'christmas' | 'anniversary';
  description?: string;
  recipe_id?: string;
  decor_id?: string;
  temp_grill?: number;
  time_grill?: number;
}

export interface Order {
  orderID: string;
  shippingDate: Date;
  shippingAddress: string;
  orderTime: Date;
  paymentTime: Date;
  completeTime: Date;
  total_price: number;
  status: string;
  user_id: string;
  s_cakeQuantity: number;
  cakes: Cake[];
}

export interface Ingredient {
  id: string;
  name: string;
  price: string;
  perquantity: number;
  unit: string;
  quantity: number;
  expiryDate: string;
  status: boolean;
}

export interface Device {
  deviceID: string;
  deviceModel: string;
  deviceName: string;
  volume: string;
  quantity: number;
  deviceType: string;
  managerID: string;
}
