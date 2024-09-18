import { shippingAmount } from "./iproduct";

export interface ICartItem {
  id?: number;
  prodId?: number;
  prodQuantity: number;
  prodName: string;
  prodCategory: number;
  count: number;
  color?: string;
  size?: string;
  price: number;
  prodImageUrl: string[];
  freeShipping: boolean;
  shippingPrice: shippingAmount;
  discountPrecent?: number;
}
