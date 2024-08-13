export interface Ingredient {
  id: string;
  name: string;
  price: string;
  perquantity: number;
  unit: string;
  quantity: number;
  expiryDate: string;
  status: boolean; // Changed to boolean
  paymentMethod: string;
}
